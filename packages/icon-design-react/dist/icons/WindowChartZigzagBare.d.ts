import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowChartZigzagBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowChartZigzagBare: ForwardRefExoticComponent<WindowChartZigzagBareProps & RefAttributes<SVGSVGElement>>;

export default WindowChartZigzagBare;
export { WindowChartZigzagBare };
