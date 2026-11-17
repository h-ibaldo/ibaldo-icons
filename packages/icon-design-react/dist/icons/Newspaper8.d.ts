import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Newspaper8Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Newspaper8: ForwardRefExoticComponent<Newspaper8Props & RefAttributes<SVGSVGElement>>;

export default Newspaper8;
export { Newspaper8 };
