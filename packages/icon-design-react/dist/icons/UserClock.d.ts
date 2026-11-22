import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserClockProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserClock: ForwardRefExoticComponent<UserClockProps & RefAttributes<SVGSVGElement>>;

export default UserClock;
export { UserClock };
