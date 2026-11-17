import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartLineSquareDotProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartLineSquareDot: ForwardRefExoticComponent<ChartLineSquareDotProps & RefAttributes<SVGSVGElement>>;

export default ChartLineSquareDot;
export { ChartLineSquareDot };
