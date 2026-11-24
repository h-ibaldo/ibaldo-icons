import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartBarSquareXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartBarSquareX: ForwardRefExoticComponent<ChartBarSquareXProps & RefAttributes<SVGSVGElement>>;

export default ChartBarSquareX;
export { ChartBarSquareX };
