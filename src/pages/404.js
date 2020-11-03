import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Error = () => {
  return (
    <Layout>
    <SEO title="404" description="Oops let's try that again..." />
      <main className="error-page">
        <div className="error-container">
          <h1>Oops seems like this page doesn't exist!</h1>
          <Link to="/" className="btn">
            Back to Home
          </Link>
        </div>
      </main>
    </Layout>
  );
}

export default Error
