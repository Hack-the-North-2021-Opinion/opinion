import styles from "../styles/Home.module.css";
import Select from "react-select";
import { useState } from "react";
import { Carousel, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";


export default function Home() {
  const [company, setCompany] = useState(false);

  return (
    <>
      <main>
        <h1 className={styles.title}>
          Opinion
        </h1>
        <h2  className = {styles.h2}>
          A new way to perceive things
        </h2>
        <Carousel className = {styles.flexBox}>
          <Carousel.Item>
            <img
              className = {styles.carousel}
              src = "/brands.png"
              alt = "Brands"
            />
            <Carousel.Caption>
              <h3 className = {styles.textColorCrimson}>Innovating the way we perceive brands</h3>
              <p className = {styles.textColorCrimson}> Investigate if a brand is viewed positively or negatively.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className = {styles.carousel}
              src = "/graphs.png"
              alt = "Change over Time"
            />
            <Carousel.Caption>
              <h3 className = {styles.textColorBlack}>View changes over time</h3>
              <p className = {styles.textColorBlack}>Get detailed analysis of brand perception over a time period.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className = {styles.carousel}
              src = "/meeting.png"
              alt = "Improve Business"
            />
            <Carousel.Caption>
              <h3 className = {styles.textColorWhite}>Improve your perception</h3>
              <p className = {styles.textColorWhite}>Plan strategies around the results</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div>
        <Form.Group className={styles.form} controlId="keyword" onChange = {() => setCompany()}>
          <Form.Label>What would you like to query?</Form.Label>
          <Form.Control type="text" placeholder = "Enter your query here"/>
        </Form.Group>
        </div>
      </main>
    </>
  )
}
