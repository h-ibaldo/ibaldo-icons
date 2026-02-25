import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserPerson42Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserPerson42: ForwardRefExoticComponent<UserPerson42Props & RefAttributes<SVGSVGElement>>;

export default UserPerson42;
export { UserPerson42 };
