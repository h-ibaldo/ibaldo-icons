import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowChartArrowBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowChartArrowBare: ForwardRefExoticComponent<WindowChartArrowBareProps & RefAttributes<SVGSVGElement>>;

export default WindowChartArrowBare;
export { WindowChartArrowBare };
