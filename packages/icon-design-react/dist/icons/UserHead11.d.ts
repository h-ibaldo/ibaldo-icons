import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserHead11Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserHead11: ForwardRefExoticComponent<UserHead11Props & RefAttributes<SVGSVGElement>>;

export default UserHead11;
export { UserHead11 };
