import styles from "../styles/Home.module.css";
import Select from "react-select";
import { useState } from "react";
import { Carousel, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";


export default function Home() {
  const [value, setValue] = useState("");
  let sentiment = 0;

  const GETrequest = async () => {
    const response = await fetch("https://opinion-server.herokuapp.com/" + value);
    const myJson = await response.json();
    value = myJson.sentiment_score_v1;
  }
  const POSTrequest = async () => {
    const response = await fetch("https://opinion-server.herokuapp.com/", {
      method: "POST",
      body: value,
      headers: {
        "Content-Type": "application/json"
      }
    });
    const myJson = await response.json();
  }

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
          <Form.Group className={styles.form} controlId="keyword">
            <Form.Label className = {styles.formText}>What would you like to query?</Form.Label>
            <Form.Control type="text" placeholder = "Enter your query here"/>
          </Form.Group>

        <div className = {styles.centered}>
          <Button variant="primary" onClick = {(val) => setValue(val)} className = {styles.button}>
            Go!
          </Button>
        </div>
      </main>
    </>
  )
}
