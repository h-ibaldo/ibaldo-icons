import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartDoughnutStorageFilledStripesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartDoughnutStorageFilledStripes: ForwardRefExoticComponent<ChartDoughnutStorageFilledStripesProps & RefAttributes<SVGSVGElement>>;

export default ChartDoughnutStorageFilledStripes;
export { ChartDoughnutStorageFilledStripes };
