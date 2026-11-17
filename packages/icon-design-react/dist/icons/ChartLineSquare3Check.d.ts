import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartLineSquare3CheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartLineSquare3Check: ForwardRefExoticComponent<ChartLineSquare3CheckProps & RefAttributes<SVGSVGElement>>;

export default ChartLineSquare3Check;
export { ChartLineSquare3Check };
