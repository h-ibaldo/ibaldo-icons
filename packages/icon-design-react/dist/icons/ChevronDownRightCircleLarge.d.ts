import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChevronDownRightCircleLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChevronDownRightCircleLarge: ForwardRefExoticComponent<ChevronDownRightCircleLargeProps & RefAttributes<SVGSVGElement>>;

export default ChevronDownRightCircleLarge;
export { ChevronDownRightCircleLarge };
