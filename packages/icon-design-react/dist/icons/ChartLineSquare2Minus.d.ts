import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartLineSquare2MinusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartLineSquare2Minus: ForwardRefExoticComponent<ChartLineSquare2MinusProps & RefAttributes<SVGSVGElement>>;

export default ChartLineSquare2Minus;
export { ChartLineSquare2Minus };
