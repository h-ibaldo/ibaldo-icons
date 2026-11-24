import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowUpToDotProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowUpToDot: ForwardRefExoticComponent<ArrowUpToDotProps & RefAttributes<SVGSVGElement>>;

export default ArrowUpToDot;
export { ArrowUpToDot };
