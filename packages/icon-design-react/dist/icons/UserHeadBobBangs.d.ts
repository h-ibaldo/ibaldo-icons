import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserHeadBobBangsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserHeadBobBangs: ForwardRefExoticComponent<UserHeadBobBangsProps & RefAttributes<SVGSVGElement>>;

export default UserHeadBobBangs;
export { UserHeadBobBangs };
