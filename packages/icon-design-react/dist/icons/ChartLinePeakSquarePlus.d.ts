import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartLinePeakSquarePlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartLinePeakSquarePlus: ForwardRefExoticComponent<ChartLinePeakSquarePlusProps & RefAttributes<SVGSVGElement>>;

export default ChartLinePeakSquarePlus;
export { ChartLinePeakSquarePlus };
