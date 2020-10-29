import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { InlineWidget } from "react-calendly"
import SEO from "../components/SEO"

const contact = () => {
  return (
    <Layout>
      <SEO title="Contact Me" description="Book a 15 Minute Meeting via Calendly"/>
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
