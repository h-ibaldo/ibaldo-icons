import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartLineOscillate1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartLineOscillate1: ForwardRefExoticComponent<ChartLineOscillate1Props & RefAttributes<SVGSVGElement>>;

export default ChartLineOscillate1;
export { ChartLineOscillate1 };
