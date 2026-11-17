import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowChartBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowChartBare: ForwardRefExoticComponent<WindowChartBareProps & RefAttributes<SVGSVGElement>>;

export default WindowChartBare;
export { WindowChartBare };
