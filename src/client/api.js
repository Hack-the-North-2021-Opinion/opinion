import axios, { Method } from "axios";
import { Api, FullApi, Spec } from "logic/api";
import { AdminClaimsSpec } from "pages/api/admin/claims";
import { AffiliateSpec } from "pages/api/affiliate";
import { PromoSpec } from "pages/api/apply-promo";
import { ArticleSpec } from "pages/api/article";
import { CancelSubscriptionSpec } from "pages/api/cancel-subscription";
import { CreateSubscriptionSpec } from "pages/api/create-subscription";
import { SecretSpec } from "pages/api/secret";
import { SubmitSpec } from "pages/api/submit";
import { UnsubscribeSpec } from "pages/api/unsubscribe";
import { FeedbackFormSpec } from "pages/api/feedback-form";

export const requestApi = async (
  method,
  path,
  data
)=> {
  const url = `/api/${path}`;
  const res = await axios.request<T>({ method, url, data });
  return res.data;
};

const apiClient = (path) => {
  const api = {
    post: () => requestApi("post", path, data),
    get: () => requestApi("get", path),
    put: (data) => requestApi("put", path, data),
    delete: () => requestApi("delete", path),
  };
  return api;
};

export default {
  feedbackEmail: apiClient<FeedbackFormSpec>("feedback-form"),
};
