import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Heart1FilledStripesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Heart1FilledStripes: ForwardRefExoticComponent<Heart1FilledStripesProps & RefAttributes<SVGSVGElement>>;

export default Heart1FilledStripes;
export { Heart1FilledStripes };
