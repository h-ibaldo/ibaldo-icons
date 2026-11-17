import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Newspaper12Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Newspaper12: ForwardRefExoticComponent<Newspaper12Props & RefAttributes<SVGSVGElement>>;

export default Newspaper12;
export { Newspaper12 };
