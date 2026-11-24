import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserPlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserPlus: ForwardRefExoticComponent<UserPlusProps & RefAttributes<SVGSVGElement>>;

export default UserPlus;
export { UserPlus };
