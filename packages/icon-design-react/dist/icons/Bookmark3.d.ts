import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bookmark3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bookmark3: ForwardRefExoticComponent<Bookmark3Props & RefAttributes<SVGSVGElement>>;

export default Bookmark3;
export { Bookmark3 };
