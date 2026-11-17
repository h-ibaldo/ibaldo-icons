import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowUturnRightLongProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowUturnRightLong: ForwardRefExoticComponent<ArrowUturnRightLongProps & RefAttributes<SVGSVGElement>>;

export default ArrowUturnRightLong;
export { ArrowUturnRightLong };
