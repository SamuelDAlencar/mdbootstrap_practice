import Navbar from "../components/Navbar";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import FirstTable from "../components/FirstTable";
import SecondTable from "../components/SecondTable";

export default function Home({ entity }) {
  return (
    <>
      <Navbar />

      {entity === "empreiteiro" ? <FirstTable /> : <SecondTable />}
    </>
  );
}
