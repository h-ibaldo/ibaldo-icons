import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowUturnUpLongProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowUturnUpLong: ForwardRefExoticComponent<ArrowUturnUpLongProps & RefAttributes<SVGSVGElement>>;

export default ArrowUturnUpLong;
export { ArrowUturnUpLong };
