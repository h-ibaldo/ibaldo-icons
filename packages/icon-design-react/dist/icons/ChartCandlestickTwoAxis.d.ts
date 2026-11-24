import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartCandlestickTwoAxisProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartCandlestickTwoAxis: ForwardRefExoticComponent<ChartCandlestickTwoAxisProps & RefAttributes<SVGSVGElement>>;

export default ChartCandlestickTwoAxis;
export { ChartCandlestickTwoAxis };
