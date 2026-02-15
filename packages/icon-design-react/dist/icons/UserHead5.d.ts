import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserHead5Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserHead5: ForwardRefExoticComponent<UserHead5Props & RefAttributes<SVGSVGElement>>;

export default UserHead5;
export { UserHead5 };
