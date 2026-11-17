import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartLineCircle3PlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartLineCircle3Plus: ForwardRefExoticComponent<ChartLineCircle3PlusProps & RefAttributes<SVGSVGElement>>;

export default ChartLineCircle3Plus;
export { ChartLineCircle3Plus };
