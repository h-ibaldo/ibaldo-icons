import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabDownloadSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabDownloadSharp: ForwardRefExoticComponent<TabDownloadSharpProps & RefAttributes<SVGSVGElement>>;

export default TabDownloadSharp;
export { TabDownloadSharp };
