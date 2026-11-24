import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface XSquareLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const XSquareLarge: ForwardRefExoticComponent<XSquareLargeProps & RefAttributes<SVGSVGElement>>;

export default XSquareLarge;
export { XSquareLarge };
