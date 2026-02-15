import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserPerson1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserPerson1: ForwardRefExoticComponent<UserPerson1Props & RefAttributes<SVGSVGElement>>;

export default UserPerson1;
export { UserPerson1 };
