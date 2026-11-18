import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowUpRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowUpRight: ForwardRefExoticComponent<ArrowUpRightProps & RefAttributes<SVGSVGElement>>;

export default ArrowUpRight;
export { ArrowUpRight };
