import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandSwipeRightDashedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandSwipeRightDashed: ForwardRefExoticComponent<HandSwipeRightDashedProps & RefAttributes<SVGSVGElement>>;

export default HandSwipeRightDashed;
export { HandSwipeRightDashed };
