import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bookmark2OneProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bookmark2One: ForwardRefExoticComponent<Bookmark2OneProps & RefAttributes<SVGSVGElement>>;

export default Bookmark2One;
export { Bookmark2One };
