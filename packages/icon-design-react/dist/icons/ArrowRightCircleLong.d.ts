import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowRightCircleLongProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowRightCircleLong: ForwardRefExoticComponent<ArrowRightCircleLongProps & RefAttributes<SVGSVGElement>>;

export default ArrowRightCircleLong;
export { ArrowRightCircleLong };
