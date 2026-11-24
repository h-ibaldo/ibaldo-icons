import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserSquare: ForwardRefExoticComponent<UserSquareProps & RefAttributes<SVGSVGElement>>;

export default UserSquare;
export { UserSquare };
