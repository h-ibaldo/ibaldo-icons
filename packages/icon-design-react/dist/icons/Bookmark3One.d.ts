import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bookmark3OneProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bookmark3One: ForwardRefExoticComponent<Bookmark3OneProps & RefAttributes<SVGSVGElement>>;

export default Bookmark3One;
export { Bookmark3One };
