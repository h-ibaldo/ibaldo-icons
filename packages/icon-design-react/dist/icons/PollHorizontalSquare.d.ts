import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PollHorizontalSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PollHorizontalSquare: ForwardRefExoticComponent<PollHorizontalSquareProps & RefAttributes<SVGSVGElement>>;

export default PollHorizontalSquare;
export { PollHorizontalSquare };
