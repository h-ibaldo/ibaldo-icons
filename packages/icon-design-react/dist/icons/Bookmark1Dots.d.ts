import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bookmark1DotsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bookmark1Dots: ForwardRefExoticComponent<Bookmark1DotsProps & RefAttributes<SVGSVGElement>>;

export default Bookmark1Dots;
export { Bookmark1Dots };
