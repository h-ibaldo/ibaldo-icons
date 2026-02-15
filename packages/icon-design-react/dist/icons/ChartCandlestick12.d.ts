import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartCandlestick12Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartCandlestick12: ForwardRefExoticComponent<ChartCandlestick12Props & RefAttributes<SVGSVGElement>>;

export default ChartCandlestick12;
export { ChartCandlestick12 };
