import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowUturnDownLongProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowUturnDownLong: ForwardRefExoticComponent<ArrowUturnDownLongProps & RefAttributes<SVGSVGElement>>;

export default ArrowUturnDownLong;
export { ArrowUturnDownLong };
