import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bookmark1Plus1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bookmark1Plus1: ForwardRefExoticComponent<Bookmark1Plus1Props & RefAttributes<SVGSVGElement>>;

export default Bookmark1Plus1;
export { Bookmark1Plus1 };
