import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserArrowDownProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserArrowDown: ForwardRefExoticComponent<UserArrowDownProps & RefAttributes<SVGSVGElement>>;

export default UserArrowDown;
export { UserArrowDown };
