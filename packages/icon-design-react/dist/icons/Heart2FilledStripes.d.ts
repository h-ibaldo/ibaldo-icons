import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Heart2FilledStripesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Heart2FilledStripes: ForwardRefExoticComponent<Heart2FilledStripesProps & RefAttributes<SVGSVGElement>>;

export default Heart2FilledStripes;
export { Heart2FilledStripes };
