import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserHeadSideBangsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserHeadSideBangs: ForwardRefExoticComponent<UserHeadSideBangsProps & RefAttributes<SVGSVGElement>>;

export default UserHeadSideBangs;
export { UserHeadSideBangs };
