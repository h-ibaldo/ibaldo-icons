import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ApplicationWindowsThemesStripesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ApplicationWindowsThemesStripes: ForwardRefExoticComponent<ApplicationWindowsThemesStripesProps & RefAttributes<SVGSVGElement>>;

export default ApplicationWindowsThemesStripes;
export { ApplicationWindowsThemesStripes };
