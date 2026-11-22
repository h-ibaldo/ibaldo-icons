import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserLockWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserLockWide: ForwardRefExoticComponent<UserLockWideProps & RefAttributes<SVGSVGElement>>;

export default UserLockWide;
export { UserLockWide };
