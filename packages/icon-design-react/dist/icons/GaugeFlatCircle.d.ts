import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GaugeFlatCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GaugeFlatCircle: ForwardRefExoticComponent<GaugeFlatCircleProps & RefAttributes<SVGSVGElement>>;

export default GaugeFlatCircle;
export { GaugeFlatCircle };
