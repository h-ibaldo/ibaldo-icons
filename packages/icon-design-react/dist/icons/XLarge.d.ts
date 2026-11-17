import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface XLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const XLarge: ForwardRefExoticComponent<XLargeProps & RefAttributes<SVGSVGElement>>;

export default XLarge;
export { XLarge };
