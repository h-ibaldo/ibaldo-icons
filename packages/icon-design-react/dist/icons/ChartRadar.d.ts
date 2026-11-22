import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartRadarProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartRadar: ForwardRefExoticComponent<ChartRadarProps & RefAttributes<SVGSVGElement>>;

export default ChartRadar;
export { ChartRadar };
