import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ReplaceCirclesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ReplaceCircles: ForwardRefExoticComponent<ReplaceCirclesProps & RefAttributes<SVGSVGElement>>;

export default ReplaceCircles;
export { ReplaceCircles };
