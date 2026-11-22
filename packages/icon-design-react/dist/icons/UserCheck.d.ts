import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserCheck: ForwardRefExoticComponent<UserCheckProps & RefAttributes<SVGSVGElement>>;

export default UserCheck;
export { UserCheck };
