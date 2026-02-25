import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Heart12Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Heart12: ForwardRefExoticComponent<Heart12Props & RefAttributes<SVGSVGElement>>;

export default Heart12;
export { Heart12 };
