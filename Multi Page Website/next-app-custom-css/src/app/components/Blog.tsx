import Styles from "./Blog.module.css"

function Blog() {
  return (
    <div className={Styles.blogContainer}>
      <h2 className={Styles.blogHeading}>Next.js 15</h2>
      <p className={Styles.blogPara}>
        Next.js 15 is officially stable and ready for production. This release
        builds on the updates from both RC1 and RC2. We&apos;ve focused heavily on
        stability while adding some exciting updates we think you&apos;ll love.
      </p>
      <div className={Styles.linksContainer}>
        <a href="/blogs">
          <p className={Styles.link}>Read More</p>
        </a>
        <a href="/blogs">
          <p className={Styles.link}>See More Blogs</p>
        </a>
      </div>
    </div>
  );
}

export default Blog;
