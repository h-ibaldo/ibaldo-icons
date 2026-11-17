import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface House3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const House3: ForwardRefExoticComponent<House3Props & RefAttributes<SVGSVGElement>>;

export default House3;
export { House3 };
