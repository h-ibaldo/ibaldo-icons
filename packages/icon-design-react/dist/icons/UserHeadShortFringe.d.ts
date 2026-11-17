import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserHeadShortFringeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserHeadShortFringe: ForwardRefExoticComponent<UserHeadShortFringeProps & RefAttributes<SVGSVGElement>>;

export default UserHeadShortFringe;
export { UserHeadShortFringe };
