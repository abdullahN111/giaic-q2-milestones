import Blogs from "./components/Blogs";
import Banner from "./components/Banner";


export default function Home() {


  return (
   <main>
    <Banner title="Welcome to Abd Blog!" desc="This is where I share my thoughts, experiences, and ideas. Stay tuned
          for exciting content on a variety of topics!" button="Explore My Posts" href="/blogs" />
<Blogs primaryBtn="Explore More"  heading="Our Top Blogs" secondaryBtn="Explore More" />
   </main>
  );
}
