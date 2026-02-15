import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bookmark1XProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bookmark1X: ForwardRefExoticComponent<Bookmark1XProps & RefAttributes<SVGSVGElement>>;

export default Bookmark1X;
export { Bookmark1X };
