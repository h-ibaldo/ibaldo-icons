import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartCandlestickTwoProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartCandlestickTwo: ForwardRefExoticComponent<ChartCandlestickTwoProps & RefAttributes<SVGSVGElement>>;

export default ChartCandlestickTwo;
export { ChartCandlestickTwo };
