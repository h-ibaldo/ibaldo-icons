import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserHead32Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserHead32: ForwardRefExoticComponent<UserHead32Props & RefAttributes<SVGSVGElement>>;

export default UserHead32;
export { UserHead32 };
