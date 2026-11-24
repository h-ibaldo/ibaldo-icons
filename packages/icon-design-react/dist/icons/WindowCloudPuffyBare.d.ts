import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowCloudPuffyBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowCloudPuffyBare: ForwardRefExoticComponent<WindowCloudPuffyBareProps & RefAttributes<SVGSVGElement>>;

export default WindowCloudPuffyBare;
export { WindowCloudPuffyBare };
