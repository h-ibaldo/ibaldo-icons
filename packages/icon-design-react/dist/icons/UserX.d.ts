import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserX: ForwardRefExoticComponent<UserXProps & RefAttributes<SVGSVGElement>>;

export default UserX;
export { UserX };
