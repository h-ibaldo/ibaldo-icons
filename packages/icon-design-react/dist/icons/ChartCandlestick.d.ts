import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartCandlestickProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartCandlestick: ForwardRefExoticComponent<ChartCandlestickProps & RefAttributes<SVGSVGElement>>;

export default ChartCandlestick;
export { ChartCandlestick };
