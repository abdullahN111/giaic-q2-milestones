
import Styles from "./Main.module.css"
import Blog from "./Blog";

function Main() {
  return (
    <main className={Styles.mainContainer}>
      <div className={Styles.mainContent}>
        <h1 className={Styles.mainHeading}>Welcome to Blog Abd.</h1>
        <p className={Styles.mainPara}>
        This website is dedicated to exploring the latest in programming technologies. Here, you&apos;ll find insightful articles, and resources on a range of topics—from popular front-end frameworks like React and Vue, to powerful back-end solutions such as Node.js and Django. Whether you&apos;re interested in mastering databases, delving into DevOps tools, or staying updated on emerging tech trends, iBlog is your go-to destination for everything related to programming and development. Join us as we dive into the tools and techniques that drive the digital world forward.
        </p>
      </div>

      <Blog></Blog>
      <Blog></Blog>
    </main>
  );
}

export default Main;
