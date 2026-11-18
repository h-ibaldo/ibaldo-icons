import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowUpCircleLongProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowUpCircleLong: ForwardRefExoticComponent<ArrowUpCircleLongProps & RefAttributes<SVGSVGElement>>;

export default ArrowUpCircleLong;
export { ArrowUpCircleLong };
