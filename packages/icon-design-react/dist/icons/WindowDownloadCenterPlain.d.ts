import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowDownloadCenterPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowDownloadCenterPlain: ForwardRefExoticComponent<WindowDownloadCenterPlainProps & RefAttributes<SVGSVGElement>>;

export default WindowDownloadCenterPlain;
export { WindowDownloadCenterPlain };
