import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserFaceAfroProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserFaceAfro: ForwardRefExoticComponent<UserFaceAfroProps & RefAttributes<SVGSVGElement>>;

export default UserFaceAfro;
export { UserFaceAfro };
