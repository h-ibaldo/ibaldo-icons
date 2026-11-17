import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartLineSquareXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartLineSquareX: ForwardRefExoticComponent<ChartLineSquareXProps & RefAttributes<SVGSVGElement>>;

export default ChartLineSquareX;
export { ChartLineSquareX };
