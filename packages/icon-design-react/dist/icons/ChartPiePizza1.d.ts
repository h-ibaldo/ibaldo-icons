import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartPiePizza1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartPiePizza1: ForwardRefExoticComponent<ChartPiePizza1Props & RefAttributes<SVGSVGElement>>;

export default ChartPiePizza1;
export { ChartPiePizza1 };
