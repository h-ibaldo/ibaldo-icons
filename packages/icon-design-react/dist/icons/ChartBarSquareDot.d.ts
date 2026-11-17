import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartBarSquareDotProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartBarSquareDot: ForwardRefExoticComponent<ChartBarSquareDotProps & RefAttributes<SVGSVGElement>>;

export default ChartBarSquareDot;
export { ChartBarSquareDot };
