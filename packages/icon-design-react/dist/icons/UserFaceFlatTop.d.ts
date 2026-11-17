import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserFaceFlatTopProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserFaceFlatTop: ForwardRefExoticComponent<UserFaceFlatTopProps & RefAttributes<SVGSVGElement>>;

export default UserFaceFlatTop;
export { UserFaceFlatTop };
