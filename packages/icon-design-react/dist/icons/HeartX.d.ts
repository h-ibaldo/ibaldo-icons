import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HeartXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HeartX: ForwardRefExoticComponent<HeartXProps & RefAttributes<SVGSVGElement>>;

export default HeartX;
export { HeartX };
