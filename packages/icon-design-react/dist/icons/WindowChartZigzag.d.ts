import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowChartZigzagProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowChartZigzag: ForwardRefExoticComponent<WindowChartZigzagProps & RefAttributes<SVGSVGElement>>;

export default WindowChartZigzag;
export { WindowChartZigzag };
