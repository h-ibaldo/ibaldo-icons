import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChevronOutCornersProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChevronOutCorners: ForwardRefExoticComponent<ChevronOutCornersProps & RefAttributes<SVGSVGElement>>;

export default ChevronOutCorners;
export { ChevronOutCorners };
