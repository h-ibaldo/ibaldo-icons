import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bookmark1TwoStripesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bookmark1TwoStripes: ForwardRefExoticComponent<Bookmark1TwoStripesProps & RefAttributes<SVGSVGElement>>;

export default Bookmark1TwoStripes;
export { Bookmark1TwoStripes };
