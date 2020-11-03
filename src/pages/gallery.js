import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import ImageGallery from "../components/ImageGallery"

const gallery = () => {
  return (
    <Layout>
      <SEO title="Gallery" description="My Work as a Freelance Photographer"/>
      <div className="contact-page">
        <ImageGallery />
        <Link to="/" className="btn center-btn">
        Back to Home
        </Link>
      </div>
    </Layout>
  );
}

export default gallery