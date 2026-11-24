import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScreenDownloadDotsTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScreenDownloadDotsTall: ForwardRefExoticComponent<ScreenDownloadDotsTallProps & RefAttributes<SVGSVGElement>>;

export default ScreenDownloadDotsTall;
export { ScreenDownloadDotsTall };
