import { TestFeature } from "@/features";
import Logo from "@/shared/assets/react.svg?react";

const Main = () => {
  return (
    <div>
      <div>
        <Logo />
      </div>
      Main Page
      <TestFeature />
    </div>
  );
};

export default Main;
