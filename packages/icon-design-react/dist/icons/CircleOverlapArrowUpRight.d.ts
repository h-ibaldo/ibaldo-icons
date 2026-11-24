import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CircleOverlapArrowUpRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CircleOverlapArrowUpRight: ForwardRefExoticComponent<CircleOverlapArrowUpRightProps & RefAttributes<SVGSVGElement>>;

export default CircleOverlapArrowUpRight;
export { CircleOverlapArrowUpRight };
