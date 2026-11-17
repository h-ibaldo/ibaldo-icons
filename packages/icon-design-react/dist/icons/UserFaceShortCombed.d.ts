import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserFaceShortCombedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserFaceShortCombed: ForwardRefExoticComponent<UserFaceShortCombedProps & RefAttributes<SVGSVGElement>>;

export default UserFaceShortCombed;
export { UserFaceShortCombed };
