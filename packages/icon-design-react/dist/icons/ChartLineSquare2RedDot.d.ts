import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartLineSquare2RedDotProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartLineSquare2RedDot: ForwardRefExoticComponent<ChartLineSquare2RedDotProps & RefAttributes<SVGSVGElement>>;

export default ChartLineSquare2RedDot;
export { ChartLineSquare2RedDot };
