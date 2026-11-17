import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface House7Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const House7: ForwardRefExoticComponent<House7Props & RefAttributes<SVGSVGElement>>;

export default House7;
export { House7 };
