import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserFaceShortFringeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserFaceShortFringe: ForwardRefExoticComponent<UserFaceShortFringeProps & RefAttributes<SVGSVGElement>>;

export default UserFaceShortFringe;
export { UserFaceShortFringe };
