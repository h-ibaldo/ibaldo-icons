import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface House1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const House1: ForwardRefExoticComponent<House1Props & RefAttributes<SVGSVGElement>>;

export default House1;
export { House1 };
