import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserDoubleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserDouble: ForwardRefExoticComponent<UserDoubleProps & RefAttributes<SVGSVGElement>>;

export default UserDouble;
export { UserDouble };
