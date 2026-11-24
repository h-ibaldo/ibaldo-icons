import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CircleOverlapArrowDownLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CircleOverlapArrowDownLeft: ForwardRefExoticComponent<CircleOverlapArrowDownLeftProps & RefAttributes<SVGSVGElement>>;

export default CircleOverlapArrowDownLeft;
export { CircleOverlapArrowDownLeft };
