import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AvatarFaceWavyBobProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AvatarFaceWavyBob: ForwardRefExoticComponent<AvatarFaceWavyBobProps & RefAttributes<SVGSVGElement>>;

export default AvatarFaceWavyBob;
export { AvatarFaceWavyBob };
