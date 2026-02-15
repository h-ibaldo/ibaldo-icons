import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartDoughnutStorage2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartDoughnutStorage2: ForwardRefExoticComponent<ChartDoughnutStorage2Props & RefAttributes<SVGSVGElement>>;

export default ChartDoughnutStorage2;
export { ChartDoughnutStorage2 };
