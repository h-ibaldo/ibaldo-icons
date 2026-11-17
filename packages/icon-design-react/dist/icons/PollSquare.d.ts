import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PollSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PollSquare: ForwardRefExoticComponent<PollSquareProps & RefAttributes<SVGSVGElement>>;

export default PollSquare;
export { PollSquare };
