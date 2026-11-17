import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartBarSquareMinusThinProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartBarSquareMinusThin: ForwardRefExoticComponent<ChartBarSquareMinusThinProps & RefAttributes<SVGSVGElement>>;

export default ChartBarSquareMinusThin;
export { ChartBarSquareMinusThin };
