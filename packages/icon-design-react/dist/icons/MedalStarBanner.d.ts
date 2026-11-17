import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MedalStarBannerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MedalStarBanner: ForwardRefExoticComponent<MedalStarBannerProps & RefAttributes<SVGSVGElement>>;

export default MedalStarBanner;
export { MedalStarBanner };
