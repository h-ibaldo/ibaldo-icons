import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartArrowUpCirclePlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartArrowUpCirclePlus: ForwardRefExoticComponent<ChartArrowUpCirclePlusProps & RefAttributes<SVGSVGElement>>;

export default ChartArrowUpCirclePlus;
export { ChartArrowUpCirclePlus };
