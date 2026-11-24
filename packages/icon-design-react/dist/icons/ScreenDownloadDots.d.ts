import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScreenDownloadDotsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScreenDownloadDots: ForwardRefExoticComponent<ScreenDownloadDotsProps & RefAttributes<SVGSVGElement>>;

export default ScreenDownloadDots;
export { ScreenDownloadDots };
