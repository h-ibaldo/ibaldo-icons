import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserStarProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserStar: ForwardRefExoticComponent<UserStarProps & RefAttributes<SVGSVGElement>>;

export default UserStar;
export { UserStar };
