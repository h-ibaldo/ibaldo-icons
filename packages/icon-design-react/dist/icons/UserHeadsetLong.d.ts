import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserHeadsetLongProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserHeadsetLong: ForwardRefExoticComponent<UserHeadsetLongProps & RefAttributes<SVGSVGElement>>;

export default UserHeadsetLong;
export { UserHeadsetLong };
