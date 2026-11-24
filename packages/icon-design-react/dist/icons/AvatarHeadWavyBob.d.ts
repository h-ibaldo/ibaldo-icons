import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AvatarHeadWavyBobProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AvatarHeadWavyBob: ForwardRefExoticComponent<AvatarHeadWavyBobProps & RefAttributes<SVGSVGElement>>;

export default AvatarHeadWavyBob;
export { AvatarHeadWavyBob };
