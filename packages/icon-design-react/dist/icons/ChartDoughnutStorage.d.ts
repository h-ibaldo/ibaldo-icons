import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartDoughnutStorageProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartDoughnutStorage: ForwardRefExoticComponent<ChartDoughnutStorageProps & RefAttributes<SVGSVGElement>>;

export default ChartDoughnutStorage;
export { ChartDoughnutStorage };
