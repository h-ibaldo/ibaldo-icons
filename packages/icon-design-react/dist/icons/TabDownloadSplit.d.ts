import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabDownloadSplitProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TabDownloadSplit: ForwardRefExoticComponent<TabDownloadSplitProps & RefAttributes<SVGSVGElement>>;

export default TabDownloadSplit;
export { TabDownloadSplit };
