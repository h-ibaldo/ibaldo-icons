import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowCloudCenterBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowCloudCenterBare: ForwardRefExoticComponent<WindowCloudCenterBareProps & RefAttributes<SVGSVGElement>>;

export default WindowCloudCenterBare;
export { WindowCloudCenterBare };
