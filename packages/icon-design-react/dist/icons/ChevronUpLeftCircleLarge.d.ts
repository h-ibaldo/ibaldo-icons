import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChevronUpLeftCircleLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChevronUpLeftCircleLarge: ForwardRefExoticComponent<ChevronUpLeftCircleLargeProps & RefAttributes<SVGSVGElement>>;

export default ChevronUpLeftCircleLarge;
export { ChevronUpLeftCircleLarge };
