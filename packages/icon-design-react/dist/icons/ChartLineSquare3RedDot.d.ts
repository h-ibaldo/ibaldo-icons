import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartLineSquare3RedDotProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartLineSquare3RedDot: ForwardRefExoticComponent<ChartLineSquare3RedDotProps & RefAttributes<SVGSVGElement>>;

export default ChartLineSquare3RedDot;
export { ChartLineSquare3RedDot };
