import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface XOctagonLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const XOctagonLarge: ForwardRefExoticComponent<XOctagonLargeProps & RefAttributes<SVGSVGElement>>;

export default XOctagonLarge;
export { XOctagonLarge };
