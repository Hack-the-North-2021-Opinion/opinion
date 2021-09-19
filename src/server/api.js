import { Api, Spec } from "logic/api";
import { isKeyOf, nonNull } from "logic/type";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

// TODO: rename, since non-api pages also use this now
export class ApiError extends Error {
  constructor(statusCode, message) {
    // TODO: better default messages
    super(message ?? `error ${statusCode}`);
  }
}

const errorInfo = (e) => {
  if (e instanceof ApiError) return [e.statusCode, e.message];
  // non-`ApiError`s are unexpected, log them
  console.error(e);
  // we could also return `e.message`,
  // but that exposes server internals to client
  return [500, "unexpected error"];
};

export const apiServer = (
  handler
) => async (req, res) => {
  const method = nonNull(req.method, "request.method").toLowerCase();
  try {
    const api = await handler(req, res);
    if (!isKeyOf(method, api)) {
      const allow = Object.keys(api).join(",").toUpperCase();
      res.setHeader("Allow", allow);
      throw new ApiError(405);
    }
    // `any` type because ts type system isn't powerful enough
    // to write a proof that the final json is of correct type
    // FIXME: [SECURITY] verify `req.body` type
    const ret = await api[method](req.body);
    return res.json(method === "post" || method === "get" ? ret : { ok: true });
  } catch (e) {
    const [code, error] = errorInfo(e);
    return res.status(code).json({ error });
  }
};
