import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowDownFromBarProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowDownFromBar: ForwardRefExoticComponent<ArrowDownFromBarProps & RefAttributes<SVGSVGElement>>;

export default ArrowDownFromBar;
export { ArrowDownFromBar };
