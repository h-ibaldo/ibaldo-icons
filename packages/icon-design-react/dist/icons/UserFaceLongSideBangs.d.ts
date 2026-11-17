import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserFaceLongSideBangsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserFaceLongSideBangs: ForwardRefExoticComponent<UserFaceLongSideBangsProps & RefAttributes<SVGSVGElement>>;

export default UserFaceLongSideBangs;
export { UserFaceLongSideBangs };
