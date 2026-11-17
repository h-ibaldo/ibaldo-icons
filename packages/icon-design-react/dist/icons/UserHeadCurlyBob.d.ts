import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserHeadCurlyBobProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserHeadCurlyBob: ForwardRefExoticComponent<UserHeadCurlyBobProps & RefAttributes<SVGSVGElement>>;

export default UserHeadCurlyBob;
export { UserHeadCurlyBob };
