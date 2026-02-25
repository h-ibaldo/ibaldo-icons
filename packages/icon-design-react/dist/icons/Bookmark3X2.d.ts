import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bookmark3X2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bookmark3X2: ForwardRefExoticComponent<Bookmark3X2Props & RefAttributes<SVGSVGElement>>;

export default Bookmark3X2;
export { Bookmark3X2 };
