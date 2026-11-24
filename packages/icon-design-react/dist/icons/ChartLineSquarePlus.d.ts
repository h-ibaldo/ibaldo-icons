import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartLineSquarePlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartLineSquarePlus: ForwardRefExoticComponent<ChartLineSquarePlusProps & RefAttributes<SVGSVGElement>>;

export default ChartLineSquarePlus;
export { ChartLineSquarePlus };
