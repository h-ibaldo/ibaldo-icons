import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserPerson2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserPerson2: ForwardRefExoticComponent<UserPerson2Props & RefAttributes<SVGSVGElement>>;

export default UserPerson2;
export { UserPerson2 };
