import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CircleMotionProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CircleMotion: ForwardRefExoticComponent<CircleMotionProps & RefAttributes<SVGSVGElement>>;

export default CircleMotion;
export { CircleMotion };
