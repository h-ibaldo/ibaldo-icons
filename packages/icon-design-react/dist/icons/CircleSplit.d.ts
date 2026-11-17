import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CircleSplitProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CircleSplit: ForwardRefExoticComponent<CircleSplitProps & RefAttributes<SVGSVGElement>>;

export default CircleSplit;
export { CircleSplit };
