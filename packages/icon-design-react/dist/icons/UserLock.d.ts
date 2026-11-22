import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserLockProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserLock: ForwardRefExoticComponent<UserLockProps & RefAttributes<SVGSVGElement>>;

export default UserLock;
export { UserLock };
