
import Styles from "./NextBlog.module.css";

const NextBlog = () => {
  return (
    <div className={Styles.nextBlogContainer}>
      <div>
        <img
          className={Styles.nextBlogImg}
          src="https://thedrum-media.imgix.net/thedrum-prod/s3/news/tmp/147154/next_15_logo.png?w=608&ar=default&fit=crop&crop=faces,edges&auto=format"
          alt="next 15"
        />
      </div>
      <h2 className={Styles.nextBlogHeading}>Next.js 15</h2>
      <div className={Styles.nextBlogContent}>
        <p className={Styles.nextBlogPara}>
          Next.js 15 is officially stable and ready for production. This release
          builds on the updates from both RC1 and RC2. We&apos;ve focused heavily on
          stability while adding some exciting updates we think you&apos;ll love.
        </p>

        <h3 className={Styles.nextBlogSubHeading}>
          Here&apos;s what is new in Next.js 15:
        </h3>
        <div className={Styles.nextBlogSubContent}>
          <li>
            <strong>@next/codemod CLI:</strong> Easily upgrade to the latest
            Next.js and React versions.
          </li>
          <li>
            <strong>Async Request APIs (Breaking):</strong> Incremental step
            towards a simplified rendering and caching model.
          </li>
          <li>
            <strong>Caching Semantics (Breaking):</strong> fetch requests, GET
            Route Handlers, and client navigations are no longer cached by
            default.
          </li>
          <li>
            <strong>React 19 Support:</strong> Support for React 19, React
            Compiler (Experimental), and hydration error improvements.
          </li>
          <li>
            <strong>Turbopack Dev (Stable):</strong> Performance and stability
            improvements.
          </li>
          <li>
            <strong>Static Indicator:</strong> New visual indicator shows static
            routes during development.
          </li>
          <li>
            <strong>unstable_after API (Experimental):</strong> Execute code
            after a response finishes streaming.
          </li>
          <li>
            <strong>instrumentation.js API (Stable):</strong> New API for server
            lifecycle observability.
          </li>
          <li>
            <strong>Enhanced Forms (next/form):</strong>Enhance HTML forms with
            client-side navigation.
          </li>
          <li>
            <strong>next.config:</strong> TypeScript support for next.config.ts.
          </li>
          <li>
            <strong>Self-hosting Improvements:</strong> More control over
            Cache-Control headers.
          </li>
          <li>
            <strong>Server Actions Security:</strong> Unguessable endpoints and
            removal of unused actions.
          </li>
          <li>
            <strong>Bundling External Packages (Stable):</strong> New config
            options for App and Pages Router.
          </li>
          <li>
            <strong>ESLint 9 Support:</strong> Added support for ESLint 9.
          </li>
          <li>
            <strong>Development and Build Performance:</strong> Improved build
            times and Faster Fast Refresh.
          </li>
        </div>
      </div>
      <div className={Styles.nextBlogBtnContainer}>
        <a href="/blogs">
          <p className={Styles.nextBlogBtnContainer}>See More Blogs</p>
        </a>
      </div>
    </div>
  );
};

export default NextBlog;
