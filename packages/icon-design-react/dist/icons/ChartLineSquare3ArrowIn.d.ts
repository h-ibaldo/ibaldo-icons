import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartLineSquare3ArrowInProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartLineSquare3ArrowIn: ForwardRefExoticComponent<ChartLineSquare3ArrowInProps & RefAttributes<SVGSVGElement>>;

export default ChartLineSquare3ArrowIn;
export { ChartLineSquare3ArrowIn };
