import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartLineCircle3MinusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartLineCircle3Minus: ForwardRefExoticComponent<ChartLineCircle3MinusProps & RefAttributes<SVGSVGElement>>;

export default ChartLineCircle3Minus;
export { ChartLineCircle3Minus };
