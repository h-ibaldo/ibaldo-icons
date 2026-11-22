import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserStackProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserStack: ForwardRefExoticComponent<UserStackProps & RefAttributes<SVGSVGElement>>;

export default UserStack;
export { UserStack };
