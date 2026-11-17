import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HeartProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Heart: ForwardRefExoticComponent<HeartProps & RefAttributes<SVGSVGElement>>;

export default Heart;
export { Heart };
