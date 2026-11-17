import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface House12Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const House12: ForwardRefExoticComponent<House12Props & RefAttributes<SVGSVGElement>>;

export default House12;
export { House12 };
