import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface VoteChevronSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const VoteChevronSquare: ForwardRefExoticComponent<VoteChevronSquareProps & RefAttributes<SVGSVGElement>>;

export default VoteChevronSquare;
export { VoteChevronSquare };
