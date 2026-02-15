import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bookmark2XProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bookmark2X: ForwardRefExoticComponent<Bookmark2XProps & RefAttributes<SVGSVGElement>>;

export default Bookmark2X;
export { Bookmark2X };
