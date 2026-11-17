import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserFaceSidePartBobProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserFaceSidePartBob: ForwardRefExoticComponent<UserFaceSidePartBobProps & RefAttributes<SVGSVGElement>>;

export default UserFaceSidePartBob;
export { UserFaceSidePartBob };
