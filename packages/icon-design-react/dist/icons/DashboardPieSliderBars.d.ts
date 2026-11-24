import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DashboardPieSliderBarsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DashboardPieSliderBars: ForwardRefExoticComponent<DashboardPieSliderBarsProps & RefAttributes<SVGSVGElement>>;

export default DashboardPieSliderBars;
export { DashboardPieSliderBars };
