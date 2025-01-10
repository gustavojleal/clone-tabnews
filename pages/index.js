import Image from "next/image";
import underconstruction from "../public/underconstruction.png";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <h1>`{process.env.NODE_ENV}`</h1>
      <Image src={underconstruction} alt="Under Construction" />
    </div>);
}

export default Home;
