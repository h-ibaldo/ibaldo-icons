import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Newspaper4Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Newspaper4: ForwardRefExoticComponent<Newspaper4Props & RefAttributes<SVGSVGElement>>;

export default Newspaper4;
export { Newspaper4 };
