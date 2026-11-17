import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandTapTwoProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandTapTwo: ForwardRefExoticComponent<HandTapTwoProps & RefAttributes<SVGSVGElement>>;

export default HandTapTwo;
export { HandTapTwo };
