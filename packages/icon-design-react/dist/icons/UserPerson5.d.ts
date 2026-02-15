import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserPerson5Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserPerson5: ForwardRefExoticComponent<UserPerson5Props & RefAttributes<SVGSVGElement>>;

export default UserPerson5;
export { UserPerson5 };
