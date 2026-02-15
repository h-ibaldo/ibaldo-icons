import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartLineSquare2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartLineSquare2: ForwardRefExoticComponent<ChartLineSquare2Props & RefAttributes<SVGSVGElement>>;

export default ChartLineSquare2;
export { ChartLineSquare2 };
