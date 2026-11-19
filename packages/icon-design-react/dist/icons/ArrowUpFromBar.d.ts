import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowUpFromBarProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowUpFromBar: ForwardRefExoticComponent<ArrowUpFromBarProps & RefAttributes<SVGSVGElement>>;

export default ArrowUpFromBar;
export { ArrowUpFromBar };
