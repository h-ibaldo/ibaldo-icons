import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bookmark1CircledProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bookmark1Circled: ForwardRefExoticComponent<Bookmark1CircledProps & RefAttributes<SVGSVGElement>>;

export default Bookmark1Circled;
export { Bookmark1Circled };
