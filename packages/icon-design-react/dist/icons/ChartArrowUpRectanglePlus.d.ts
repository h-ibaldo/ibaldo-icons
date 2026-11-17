import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartArrowUpRectanglePlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartArrowUpRectanglePlus: ForwardRefExoticComponent<ChartArrowUpRectanglePlusProps & RefAttributes<SVGSVGElement>>;

export default ChartArrowUpRectanglePlus;
export { ChartArrowUpRectanglePlus };
