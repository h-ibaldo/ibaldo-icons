import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserHeadShortProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserHeadShort: ForwardRefExoticComponent<UserHeadShortProps & RefAttributes<SVGSVGElement>>;

export default UserHeadShort;
export { UserHeadShort };
