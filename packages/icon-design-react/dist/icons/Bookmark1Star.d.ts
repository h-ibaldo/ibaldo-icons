import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bookmark1StarProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bookmark1Star: ForwardRefExoticComponent<Bookmark1StarProps & RefAttributes<SVGSVGElement>>;

export default Bookmark1Star;
export { Bookmark1Star };
