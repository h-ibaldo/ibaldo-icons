import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartLineSquare2DotProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartLineSquare2Dot: ForwardRefExoticComponent<ChartLineSquare2DotProps & RefAttributes<SVGSVGElement>>;

export default ChartLineSquare2Dot;
export { ChartLineSquare2Dot };
