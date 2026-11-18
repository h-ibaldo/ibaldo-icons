import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquareRoundedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquareRounded: ForwardRefExoticComponent<SquareRoundedProps & RefAttributes<SVGSVGElement>>;

export default SquareRounded;
export { SquareRounded };
