import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowUpLeftCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowUpLeftCircle: ForwardRefExoticComponent<ArrowUpLeftCircleProps & RefAttributes<SVGSVGElement>>;

export default ArrowUpLeftCircle;
export { ArrowUpLeftCircle };
