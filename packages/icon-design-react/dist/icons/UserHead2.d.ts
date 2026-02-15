import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserHead2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserHead2: ForwardRefExoticComponent<UserHead2Props & RefAttributes<SVGSVGElement>>;

export default UserHead2;
export { UserHead2 };
