import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartLineWideCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartLineWideCircle: ForwardRefExoticComponent<ChartLineWideCircleProps & RefAttributes<SVGSVGElement>>;

export default ChartLineWideCircle;
export { ChartLineWideCircle };
