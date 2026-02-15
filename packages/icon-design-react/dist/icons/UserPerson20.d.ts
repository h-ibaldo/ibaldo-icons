import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserPerson20Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserPerson20: ForwardRefExoticComponent<UserPerson20Props & RefAttributes<SVGSVGElement>>;

export default UserPerson20;
export { UserPerson20 };
