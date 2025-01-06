import Image from "next/image";
import underconstruction from "../public/underconstruction.jpg";

function Home() {
  return 
    <div>
      <Image src={underconstruction} alt="Under Construction" />
    </div>;
}

export default Home;
