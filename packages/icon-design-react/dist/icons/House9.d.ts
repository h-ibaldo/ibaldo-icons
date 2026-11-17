import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface House9Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const House9: ForwardRefExoticComponent<House9Props & RefAttributes<SVGSVGElement>>;

export default House9;
export { House9 };
