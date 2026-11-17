import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartLineSquareMinusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartLineSquareMinus: ForwardRefExoticComponent<ChartLineSquareMinusProps & RefAttributes<SVGSVGElement>>;

export default ChartLineSquareMinus;
export { ChartLineSquareMinus };
