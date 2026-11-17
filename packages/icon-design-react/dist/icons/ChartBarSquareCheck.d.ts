import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartBarSquareCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartBarSquareCheck: ForwardRefExoticComponent<ChartBarSquareCheckProps & RefAttributes<SVGSVGElement>>;

export default ChartBarSquareCheck;
export { ChartBarSquareCheck };
