import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bookmark1SearchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bookmark1Search: ForwardRefExoticComponent<Bookmark1SearchProps & RefAttributes<SVGSVGElement>>;

export default Bookmark1Search;
export { Bookmark1Search };
