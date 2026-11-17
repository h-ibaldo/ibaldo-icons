import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SelfieSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SelfieSquare: ForwardRefExoticComponent<SelfieSquareProps & RefAttributes<SVGSVGElement>>;

export default SelfieSquare;
export { SelfieSquare };
