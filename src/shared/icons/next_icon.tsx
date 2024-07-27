import { FC } from "react";

type NextIconProps = {
  width?: number;
  height?: number;
  className?: string;
};

const NextIcon: FC<NextIconProps> = ({ className, width = 16, height = 9 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={className ? undefined : width}
    height={className ? undefined : height}
    className={className}
    viewBox="0 0 16 9"
    fill="none"
  >
    <path
      d="M15.3536 4.89262C15.5488 4.69735 15.5488 4.38077 15.3536 4.18551L12.1716 1.00353C11.9763 0.808266 11.6597 0.808266 11.4645 1.00353C11.2692 1.19879 11.2692 1.51537 11.4645 1.71064L14.2929 4.53906L11.4645 7.36749C11.2692 7.56275 11.2692 7.87933 11.4645 8.0746C11.6597 8.26986 11.9763 8.26986 12.1716 8.0746L15.3536 4.89262ZM0 5.03906H15V4.03906H0V5.03906Z"
      fill={className ? undefined : "#ffffff"}
    />
  </svg>
);

export default NextIcon;
