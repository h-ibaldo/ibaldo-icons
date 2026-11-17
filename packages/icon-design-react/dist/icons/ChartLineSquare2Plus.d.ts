import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartLineSquare2PlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartLineSquare2Plus: ForwardRefExoticComponent<ChartLineSquare2PlusProps & RefAttributes<SVGSVGElement>>;

export default ChartLineSquare2Plus;
export { ChartLineSquare2Plus };
