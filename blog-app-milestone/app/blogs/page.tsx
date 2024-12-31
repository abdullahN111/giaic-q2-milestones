import Banner from "../components/Banner";
import Blogs from "../components/Blogs";

const page = () => {
  return (
    <section>
      <Banner
        title="Discover Abd Blogs!"
        desc="Embark on a journey through ideas and stories that inspire, inform, and engage. From personal anecdotes to deep dives into web development, explore a variety of topics that spark curiosity and creativity."
      />
      <Blogs heading="Discover the Wide Range of Our Blogs" primaryBtn="See More" primaryBtnUrl="/blogs"/>
    </section>
  );
};

export default page;
