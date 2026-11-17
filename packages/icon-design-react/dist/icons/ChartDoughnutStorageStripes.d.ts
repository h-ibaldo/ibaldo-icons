import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartDoughnutStorageStripesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartDoughnutStorageStripes: ForwardRefExoticComponent<ChartDoughnutStorageStripesProps & RefAttributes<SVGSVGElement>>;

export default ChartDoughnutStorageStripes;
export { ChartDoughnutStorageStripes };
