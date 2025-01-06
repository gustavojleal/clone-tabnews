import Image from "next/image";
import underconstruction from "../public/underconstruction.png";

function Home() {
  return (
    <div>
      <Image src={underconstruction} alt="Under Construction" />
    </div>);
}

export default Home;
