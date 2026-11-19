import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowUpLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowUpLeft: ForwardRefExoticComponent<ArrowUpLeftProps & RefAttributes<SVGSVGElement>>;

export default ArrowUpLeft;
export { ArrowUpLeft };
