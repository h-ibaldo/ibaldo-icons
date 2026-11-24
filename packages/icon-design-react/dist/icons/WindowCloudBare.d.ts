import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowCloudBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowCloudBare: ForwardRefExoticComponent<WindowCloudBareProps & RefAttributes<SVGSVGElement>>;

export default WindowCloudBare;
export { WindowCloudBare };
