import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartSankeyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartSankey: ForwardRefExoticComponent<ChartSankeyProps & RefAttributes<SVGSVGElement>>;

export default ChartSankey;
export { ChartSankey };
