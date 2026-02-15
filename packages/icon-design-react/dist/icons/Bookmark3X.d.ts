import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bookmark3XProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bookmark3X: ForwardRefExoticComponent<Bookmark3XProps & RefAttributes<SVGSVGElement>>;

export default Bookmark3X;
export { Bookmark3X };
