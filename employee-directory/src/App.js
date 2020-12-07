import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "./components/Container";
import Header from "./components/Header";
import Row from "./components/Row";
import Search from "./components/Search";
import Table from "./components/Table";

function App() {
    return (
        <Router>
        <div>
        <Header />
        <Search />
        <Row />
        <Table />
        </div>
        </Router>
    );
}

export default App;