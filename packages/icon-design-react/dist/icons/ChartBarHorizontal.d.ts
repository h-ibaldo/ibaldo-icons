import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartBarHorizontalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartBarHorizontal: ForwardRefExoticComponent<ChartBarHorizontalProps & RefAttributes<SVGSVGElement>>;

export default ChartBarHorizontal;
export { ChartBarHorizontal };
