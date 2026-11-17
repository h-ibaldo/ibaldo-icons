import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartLineSquare3PlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartLineSquare3Plus: ForwardRefExoticComponent<ChartLineSquare3PlusProps & RefAttributes<SVGSVGElement>>;

export default ChartLineSquare3Plus;
export { ChartLineSquare3Plus };
