import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartLineSquare3MinusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartLineSquare3Minus: ForwardRefExoticComponent<ChartLineSquare3MinusProps & RefAttributes<SVGSVGElement>>;

export default ChartLineSquare3Minus;
export { ChartLineSquare3Minus };
