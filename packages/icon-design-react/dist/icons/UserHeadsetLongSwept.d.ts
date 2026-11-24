import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserHeadsetLongSweptProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserHeadsetLongSwept: ForwardRefExoticComponent<UserHeadsetLongSweptProps & RefAttributes<SVGSVGElement>>;

export default UserHeadsetLongSwept;
export { UserHeadsetLongSwept };
