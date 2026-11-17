import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartLineSquare2CheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartLineSquare2Check: ForwardRefExoticComponent<ChartLineSquare2CheckProps & RefAttributes<SVGSVGElement>>;

export default ChartLineSquare2Check;
export { ChartLineSquare2Check };
