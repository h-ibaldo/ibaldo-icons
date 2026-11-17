import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserFaceWavyBobProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserFaceWavyBob: ForwardRefExoticComponent<UserFaceWavyBobProps & RefAttributes<SVGSVGElement>>;

export default UserFaceWavyBob;
export { UserFaceWavyBob };
