import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bookmark1Star2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bookmark1Star2: ForwardRefExoticComponent<Bookmark1Star2Props & RefAttributes<SVGSVGElement>>;

export default Bookmark1Star2;
export { Bookmark1Star2 };
