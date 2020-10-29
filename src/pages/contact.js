import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { InlineWidget } from "react-calendly";

const contact = () => {
  return (
    <Layout>
      <div className="contact-page">
        <InlineWidget url="https://calendly.com/emilianolowe" />
        <Link to="//" className="btn center-btn">
        Back to Home
        </Link>
      </div>
    </Layout>
  );
}

export default contact
