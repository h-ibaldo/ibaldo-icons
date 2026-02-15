import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bookmark1CircleCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bookmark1CircleCheck: ForwardRefExoticComponent<Bookmark1CircleCheckProps & RefAttributes<SVGSVGElement>>;

export default Bookmark1CircleCheck;
export { Bookmark1CircleCheck };
