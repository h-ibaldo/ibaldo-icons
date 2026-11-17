import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserHeadShortCombedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserHeadShortCombed: ForwardRefExoticComponent<UserHeadShortCombedProps & RefAttributes<SVGSVGElement>>;

export default UserHeadShortCombed;
export { UserHeadShortCombed };
