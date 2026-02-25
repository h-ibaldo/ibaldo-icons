import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserHead42Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserHead42: ForwardRefExoticComponent<UserHead42Props & RefAttributes<SVGSVGElement>>;

export default UserHead42;
export { UserHead42 };
