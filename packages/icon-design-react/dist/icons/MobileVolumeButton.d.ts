import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MobileVolumeButtonProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MobileVolumeButton: ForwardRefExoticComponent<MobileVolumeButtonProps & RefAttributes<SVGSVGElement>>;

export default MobileVolumeButton;
export { MobileVolumeButton };
