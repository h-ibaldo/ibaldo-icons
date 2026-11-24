import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const User: ForwardRefExoticComponent<UserProps & RefAttributes<SVGSVGElement>>;

export default User;
export { User };
