import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SealBannerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SealBanner: ForwardRefExoticComponent<SealBannerProps & RefAttributes<SVGSVGElement>>;

export default SealBanner;
export { SealBanner };
