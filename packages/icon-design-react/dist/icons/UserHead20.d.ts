import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserHead20Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserHead20: ForwardRefExoticComponent<UserHead20Props & RefAttributes<SVGSVGElement>>;

export default UserHead20;
export { UserHead20 };
