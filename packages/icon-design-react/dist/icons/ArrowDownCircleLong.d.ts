import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowDownCircleLongProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowDownCircleLong: ForwardRefExoticComponent<ArrowDownCircleLongProps & RefAttributes<SVGSVGElement>>;

export default ArrowDownCircleLong;
export { ArrowDownCircleLong };
