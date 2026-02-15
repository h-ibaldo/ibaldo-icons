import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartLineOscillate2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartLineOscillate2: ForwardRefExoticComponent<ChartLineOscillate2Props & RefAttributes<SVGSVGElement>>;

export default ChartLineOscillate2;
export { ChartLineOscillate2 };
