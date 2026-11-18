import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChevronLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChevronLeft: ForwardRefExoticComponent<ChevronLeftProps & RefAttributes<SVGSVGElement>>;

export default ChevronLeft;
export { ChevronLeft };
