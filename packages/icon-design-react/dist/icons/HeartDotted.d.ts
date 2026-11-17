import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HeartDottedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HeartDotted: ForwardRefExoticComponent<HeartDottedProps & RefAttributes<SVGSVGElement>>;

export default HeartDotted;
export { HeartDotted };
