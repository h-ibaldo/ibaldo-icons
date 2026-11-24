import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartBarSquareXThinProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartBarSquareXThin: ForwardRefExoticComponent<ChartBarSquareXThinProps & RefAttributes<SVGSVGElement>>;

export default ChartBarSquareXThin;
export { ChartBarSquareXThin };
