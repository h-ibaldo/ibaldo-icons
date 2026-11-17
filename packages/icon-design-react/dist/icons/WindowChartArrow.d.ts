import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowChartArrowProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowChartArrow: ForwardRefExoticComponent<WindowChartArrowProps & RefAttributes<SVGSVGElement>>;

export default WindowChartArrow;
export { WindowChartArrow };
