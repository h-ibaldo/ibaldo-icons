import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserPerson3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserPerson3: ForwardRefExoticComponent<UserPerson3Props & RefAttributes<SVGSVGElement>>;

export default UserPerson3;
export { UserPerson3 };
