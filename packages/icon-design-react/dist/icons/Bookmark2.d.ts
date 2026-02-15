import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bookmark2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bookmark2: ForwardRefExoticComponent<Bookmark2Props & RefAttributes<SVGSVGElement>>;

export default Bookmark2;
export { Bookmark2 };
