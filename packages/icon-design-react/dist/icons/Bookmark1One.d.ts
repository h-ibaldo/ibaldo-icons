import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bookmark1OneProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bookmark1One: ForwardRefExoticComponent<Bookmark1OneProps & RefAttributes<SVGSVGElement>>;

export default Bookmark1One;
export { Bookmark1One };
