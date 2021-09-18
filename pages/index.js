import styles from "../styles/Home.module.css";
import Select from "react-select";
import { useState } from "react";
import { Carousel } from "react-bootstrap";

export default function Home() {
  const [company, setCompany] = useState(false);

  const options = [
    { value: "Twitter", label: "T witter" },
    { value: "Pepsi", label: "Pepsi" },
    { value: "McDonald's", label: "McDonald's" }
  ];
  return (
    <>
      <main>
        <h1 className={styles.title}>
          Opinion
        </h1>
        <h2 className={styles.title}>
          A new way to view companies
        </h2>

        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src = "/public/brands.jpg"
            />
            <Carousel.Caption>
              <h3>Innovating the way we perceive brands</h3>
              <p>Investigate if a brand is viewed positively or negatively.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src = "/public/graphs.jpeg"
            />
            <Carousel.Caption>
              <h3>View changes over time</h3>
              <p>Get detailed analysis of brand perception over a time period.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
            className="d-block w-100"
              src = "/public/meetings.jpeg"
            />
            <Carousel.Caption>
              <h3>aksndo</h3>
              <p>Plan business strategy around the results</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div>
          <Select
            options = {options}
            placeholder = "Select a company"
            onChange = {() => setCompany()}
          />
        </div>
      </main>
    </>
  )
}
