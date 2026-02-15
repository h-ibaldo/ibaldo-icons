import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserPerson4Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserPerson4: ForwardRefExoticComponent<UserPerson4Props & RefAttributes<SVGSVGElement>>;

export default UserPerson4;
export { UserPerson4 };
