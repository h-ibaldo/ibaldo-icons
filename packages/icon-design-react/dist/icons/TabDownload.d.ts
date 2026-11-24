import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabDownloadProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabDownload: ForwardRefExoticComponent<TabDownloadProps & RefAttributes<SVGSVGElement>>;

export default TabDownload;
export { TabDownload };
