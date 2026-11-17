import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface XCircleLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const XCircleLarge: ForwardRefExoticComponent<XCircleLargeProps & RefAttributes<SVGSVGElement>>;

export default XCircleLarge;
export { XCircleLarge };
