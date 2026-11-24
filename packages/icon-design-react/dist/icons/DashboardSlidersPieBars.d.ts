import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DashboardSlidersPieBarsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DashboardSlidersPieBars: ForwardRefExoticComponent<DashboardSlidersPieBarsProps & RefAttributes<SVGSVGElement>>;

export default DashboardSlidersPieBars;
export { DashboardSlidersPieBars };
