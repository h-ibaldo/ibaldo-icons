import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bookmark3CheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bookmark3Check: ForwardRefExoticComponent<Bookmark3CheckProps & RefAttributes<SVGSVGElement>>;

export default Bookmark3Check;
export { Bookmark3Check };
