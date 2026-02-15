import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserHead16Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserHead16: ForwardRefExoticComponent<UserHead16Props & RefAttributes<SVGSVGElement>>;

export default UserHead16;
export { UserHead16 };
