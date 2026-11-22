import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserCircle: ForwardRefExoticComponent<UserCircleProps & RefAttributes<SVGSVGElement>>;

export default UserCircle;
export { UserCircle };
