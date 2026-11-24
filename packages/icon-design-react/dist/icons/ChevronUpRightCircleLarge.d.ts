import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChevronUpRightCircleLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChevronUpRightCircleLarge: ForwardRefExoticComponent<ChevronUpRightCircleLargeProps & RefAttributes<SVGSVGElement>>;

export default ChevronUpRightCircleLarge;
export { ChevronUpRightCircleLarge };
