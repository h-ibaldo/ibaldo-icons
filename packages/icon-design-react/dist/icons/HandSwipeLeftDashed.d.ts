import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandSwipeLeftDashedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandSwipeLeftDashed: ForwardRefExoticComponent<HandSwipeLeftDashedProps & RefAttributes<SVGSVGElement>>;

export default HandSwipeLeftDashed;
export { HandSwipeLeftDashed };
