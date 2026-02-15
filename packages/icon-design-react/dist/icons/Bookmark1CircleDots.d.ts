import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bookmark1CircleDotsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bookmark1CircleDots: ForwardRefExoticComponent<Bookmark1CircleDotsProps & RefAttributes<SVGSVGElement>>;

export default Bookmark1CircleDots;
export { Bookmark1CircleDots };
