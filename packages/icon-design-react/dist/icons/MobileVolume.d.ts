import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MobileVolumeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MobileVolume: ForwardRefExoticComponent<MobileVolumeProps & RefAttributes<SVGSVGElement>>;

export default MobileVolume;
export { MobileVolume };
