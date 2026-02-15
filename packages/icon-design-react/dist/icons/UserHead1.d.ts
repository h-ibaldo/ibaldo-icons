import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserHead1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserHead1: ForwardRefExoticComponent<UserHead1Props & RefAttributes<SVGSVGElement>>;

export default UserHead1;
export { UserHead1 };
