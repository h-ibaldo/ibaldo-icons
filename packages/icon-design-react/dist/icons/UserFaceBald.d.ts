import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserFaceBaldProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserFaceBald: ForwardRefExoticComponent<UserFaceBaldProps & RefAttributes<SVGSVGElement>>;

export default UserFaceBald;
export { UserFaceBald };
