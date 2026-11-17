import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Newspaper10Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Newspaper10: ForwardRefExoticComponent<Newspaper10Props & RefAttributes<SVGSVGElement>>;

export default Newspaper10;
export { Newspaper10 };
