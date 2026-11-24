import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartBarSquarePlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartBarSquarePlus: ForwardRefExoticComponent<ChartBarSquarePlusProps & RefAttributes<SVGSVGElement>>;

export default ChartBarSquarePlus;
export { ChartBarSquarePlus };
