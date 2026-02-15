import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartCandlestick2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartCandlestick2: ForwardRefExoticComponent<ChartCandlestick2Props & RefAttributes<SVGSVGElement>>;

export default ChartCandlestick2;
export { ChartCandlestick2 };
