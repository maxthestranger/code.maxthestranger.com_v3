import * as React from "react";
import { Link } from "gatsby";
// import { StaticImage } from "gatsby-plugin-image"
import Layout from "../layouts/layout";

// markup
const IndexPage = () => (
  <Layout>
    <section className="p-3 p-lg-5">
      <div className="container">
        <h2 className="section-title mb-5">Latest Blog Posts</h2>
        <div className="row">
          <div className="col-md-4 mb-5">
            <div className="card blog-post-card">
              {/* <Image className="card-img-top" src="assets/images/blog/blog-post-thumb-card-1.jpg" alt="image" /> */}
              <div className="card-body">
                <h5 className="card-title">
                  <a className="theme-link" href="blog-post.html">
                    Top 3 JavaScript Frameworks
                  </a>
                </h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient...
                </p>
                <p className="mb-0">
                  <a className="text-link" href="blog-post.html">
                    Read more →
                  </a>
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Published 2 days ago</small>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card blog-post-card">
              {/* <Image className="card-img-top" src="assets/images/blog/blog-post-thumb-card-2.jpg" alt="image" /> */}
              <div className="card-body">
                <h5 className="card-title">
                  <a className="theme-link" href="blog-post.html">
                    About Remote Working
                  </a>
                </h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient...
                </p>
                <p className="mb-0">
                  <a className="text-link" href="blog-post.html">
                    Read more →
                  </a>
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Published a week ago</small>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card blog-post-card">
              {/* <Image className="card-img-top" src="assets/images/blog/blog-post-thumb-card-3.jpg" alt="image" /> */}
              <div className="card-body">
                <h5 className="card-title">
                  <a className="theme-link" href="blog-post.html">
                    A Guide to Becoming a Full-Stack Developer
                  </a>
                </h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient...
                </p>
                <p className="mb-0">
                  <a className="text-link" href="blog-post.html">
                    Read more →
                  </a>
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Published 3 weeks ago</small>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center py-3">
          <a href="blog-home.html" className="btn btn-primary">
            <svg
              className="svg-inline--fa fa-circle-right me-2"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="circle-right"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M512 256c0-141.4-114.6-256-256-256S0 114.6 0 256c0 141.4 114.6 256 256 256S512 397.4 512 256zM265.9 382.8C259.9 380.3 256 374.5 256 368v-64H160c-17.67 0-32-14.33-32-32v-32c0-17.67 14.33-32 32-32h96v-64c0-6.469 3.891-12.31 9.875-14.78c5.984-2.484 12.86-1.109 17.44 3.469l112 112c6.248 6.248 6.248 16.38 0 22.62l-112 112C278.7 383.9 271.9 385.3 265.9 382.8z"
              ></path>
            </svg>
            <i className="fas fa-arrow-alt-circle-right me-2"></i> View Blog
          </a>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
