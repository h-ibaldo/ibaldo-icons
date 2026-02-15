import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserHead4Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserHead4: ForwardRefExoticComponent<UserHead4Props & RefAttributes<SVGSVGElement>>;

export default UserHead4;
export { UserHead4 };
