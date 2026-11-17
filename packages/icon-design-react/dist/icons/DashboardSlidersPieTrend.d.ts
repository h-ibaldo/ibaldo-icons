import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DashboardSlidersPieTrendProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DashboardSlidersPieTrend: ForwardRefExoticComponent<DashboardSlidersPieTrendProps & RefAttributes<SVGSVGElement>>;

export default DashboardSlidersPieTrend;
export { DashboardSlidersPieTrend };
