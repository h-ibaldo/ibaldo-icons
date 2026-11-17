import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface House11Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const House11: ForwardRefExoticComponent<House11Props & RefAttributes<SVGSVGElement>>;

export default House11;
export { House11 };
