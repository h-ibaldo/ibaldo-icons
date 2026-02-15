import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bookmark2CheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bookmark2Check: ForwardRefExoticComponent<Bookmark2CheckProps & RefAttributes<SVGSVGElement>>;

export default Bookmark2Check;
export { Bookmark2Check };
