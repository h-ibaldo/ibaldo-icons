import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserGroupProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserGroup: ForwardRefExoticComponent<UserGroupProps & RefAttributes<SVGSVGElement>>;

export default UserGroup;
export { UserGroup };
