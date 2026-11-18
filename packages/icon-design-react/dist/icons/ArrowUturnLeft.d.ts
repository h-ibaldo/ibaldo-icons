import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowUturnLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowUturnLeft: ForwardRefExoticComponent<ArrowUturnLeftProps & RefAttributes<SVGSVGElement>>;

export default ArrowUturnLeft;
export { ArrowUturnLeft };
