import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserMenu2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserMenu2: ForwardRefExoticComponent<UserMenu2Props & RefAttributes<SVGSVGElement>>;

export default UserMenu2;
export { UserMenu2 };
