import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bookmark1StripesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bookmark1Stripes: ForwardRefExoticComponent<Bookmark1StripesProps & RefAttributes<SVGSVGElement>>;

export default Bookmark1Stripes;
export { Bookmark1Stripes };
