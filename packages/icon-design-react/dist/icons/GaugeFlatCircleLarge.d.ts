import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GaugeFlatCircleLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GaugeFlatCircleLarge: ForwardRefExoticComponent<GaugeFlatCircleLargeProps & RefAttributes<SVGSVGElement>>;

export default GaugeFlatCircleLarge;
export { GaugeFlatCircleLarge };
