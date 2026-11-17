import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Newspaper5Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Newspaper5: ForwardRefExoticComponent<Newspaper5Props & RefAttributes<SVGSVGElement>>;

export default Newspaper5;
export { Newspaper5 };
