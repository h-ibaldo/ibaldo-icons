import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartLineCircleXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartLineCircleX: ForwardRefExoticComponent<ChartLineCircleXProps & RefAttributes<SVGSVGElement>>;

export default ChartLineCircleX;
export { ChartLineCircleX };
