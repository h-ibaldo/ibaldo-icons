import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MedalBannerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MedalBanner: ForwardRefExoticComponent<MedalBannerProps & RefAttributes<SVGSVGElement>>;

export default MedalBanner;
export { MedalBanner };
