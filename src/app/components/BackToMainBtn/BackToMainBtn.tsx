import Link from "next/link";
import "./BackToMainBtn.scss";

const BackToMainBtn = () => {
  return (
    <Link className="back-link" href="/">
      Back to main page
    </Link>
  );
};

export default BackToMainBtn;
