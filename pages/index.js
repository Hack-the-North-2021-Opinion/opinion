import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Select from "react-select";

export default function Home() {
  const options = [
    { value: "Twitter", label: "Twitter" }
  ];
  return (
    <div>
      <main>
        <h1 className={styles.title}>
          Opinion
        </h1>
        <div className = "button">
          <Select
            style = {{ width: "50px" }}
            options = {options}
            placeholder = "Select a company"
          />
        </div>
      </main>
    </div>
  )
}
