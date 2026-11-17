import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserFaceMohawkProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserFaceMohawk: ForwardRefExoticComponent<UserFaceMohawkProps & RefAttributes<SVGSVGElement>>;

export default UserFaceMohawk;
export { UserFaceMohawk };
