import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserHead10Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserHead10: ForwardRefExoticComponent<UserHead10Props & RefAttributes<SVGSVGElement>>;

export default UserHead10;
export { UserHead10 };
