import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartCandlestick1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartCandlestick1: ForwardRefExoticComponent<ChartCandlestick1Props & RefAttributes<SVGSVGElement>>;

export default ChartCandlestick1;
export { ChartCandlestick1 };
