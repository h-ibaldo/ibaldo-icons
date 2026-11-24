import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartPieSliceProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartPieSlice: ForwardRefExoticComponent<ChartPieSliceProps & RefAttributes<SVGSVGElement>>;

export default ChartPieSlice;
export { ChartPieSlice };
