import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartLineSquare3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartLineSquare3: ForwardRefExoticComponent<ChartLineSquare3Props & RefAttributes<SVGSVGElement>>;

export default ChartLineSquare3;
export { ChartLineSquare3 };
