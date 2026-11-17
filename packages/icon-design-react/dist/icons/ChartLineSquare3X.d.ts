import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartLineSquare3XProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartLineSquare3X: ForwardRefExoticComponent<ChartLineSquare3XProps & RefAttributes<SVGSVGElement>>;

export default ChartLineSquare3X;
export { ChartLineSquare3X };
