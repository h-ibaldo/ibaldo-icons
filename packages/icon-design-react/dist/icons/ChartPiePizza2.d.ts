import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartPiePizza2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartPiePizza2: ForwardRefExoticComponent<ChartPiePizza2Props & RefAttributes<SVGSVGElement>>;

export default ChartPiePizza2;
export { ChartPiePizza2 };
