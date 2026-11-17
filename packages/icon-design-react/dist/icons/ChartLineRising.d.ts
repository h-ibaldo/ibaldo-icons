import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartLineRisingProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartLineRising: ForwardRefExoticComponent<ChartLineRisingProps & RefAttributes<SVGSVGElement>>;

export default ChartLineRising;
export { ChartLineRising };
