import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChevronUpCircleLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChevronUpCircleLarge: ForwardRefExoticComponent<ChevronUpCircleLargeProps & RefAttributes<SVGSVGElement>>;

export default ChevronUpCircleLarge;
export { ChevronUpCircleLarge };
