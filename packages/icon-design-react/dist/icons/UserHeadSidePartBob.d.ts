import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserHeadSidePartBobProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserHeadSidePartBob: ForwardRefExoticComponent<UserHeadSidePartBobProps & RefAttributes<SVGSVGElement>>;

export default UserHeadSidePartBob;
export { UserHeadSidePartBob };
