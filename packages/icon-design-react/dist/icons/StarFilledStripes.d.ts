import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StarFilledStripesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StarFilledStripes: ForwardRefExoticComponent<StarFilledStripesProps & RefAttributes<SVGSVGElement>>;

export default StarFilledStripes;
export { StarFilledStripes };
