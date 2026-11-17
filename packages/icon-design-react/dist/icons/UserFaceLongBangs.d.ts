import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserFaceLongBangsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserFaceLongBangs: ForwardRefExoticComponent<UserFaceLongBangsProps & RefAttributes<SVGSVGElement>>;

export default UserFaceLongBangs;
export { UserFaceLongBangs };
