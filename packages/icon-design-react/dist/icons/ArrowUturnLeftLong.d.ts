import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowUturnLeftLongProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowUturnLeftLong: ForwardRefExoticComponent<ArrowUturnLeftLongProps & RefAttributes<SVGSVGElement>>;

export default ArrowUturnLeftLong;
export { ArrowUturnLeftLong };
