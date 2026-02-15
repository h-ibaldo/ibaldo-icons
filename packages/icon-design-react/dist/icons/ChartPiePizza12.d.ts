import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartPiePizza12Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartPiePizza12: ForwardRefExoticComponent<ChartPiePizza12Props & RefAttributes<SVGSVGElement>>;

export default ChartPiePizza12;
export { ChartPiePizza12 };
