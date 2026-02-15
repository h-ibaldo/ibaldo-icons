import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserMenuProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserMenu: ForwardRefExoticComponent<UserMenuProps & RefAttributes<SVGSVGElement>>;

export default UserMenu;
export { UserMenu };
