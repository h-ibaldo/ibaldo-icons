import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserHeadSweptBangsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserHeadSweptBangs: ForwardRefExoticComponent<UserHeadSweptBangsProps & RefAttributes<SVGSVGElement>>;

export default UserHeadSweptBangs;
export { UserHeadSweptBangs };
