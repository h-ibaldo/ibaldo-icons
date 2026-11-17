import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserFaceLongBraidsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserFaceLongBraids: ForwardRefExoticComponent<UserFaceLongBraidsProps & RefAttributes<SVGSVGElement>>;

export default UserFaceLongBraids;
export { UserFaceLongBraids };
