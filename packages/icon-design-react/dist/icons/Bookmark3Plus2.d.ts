import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bookmark3Plus2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bookmark3Plus2: ForwardRefExoticComponent<Bookmark3Plus2Props & RefAttributes<SVGSVGElement>>;

export default Bookmark3Plus2;
export { Bookmark3Plus2 };
