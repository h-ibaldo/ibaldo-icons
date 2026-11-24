import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserMinusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserMinus: ForwardRefExoticComponent<UserMinusProps & RefAttributes<SVGSVGElement>>;

export default UserMinus;
export { UserMinus };
