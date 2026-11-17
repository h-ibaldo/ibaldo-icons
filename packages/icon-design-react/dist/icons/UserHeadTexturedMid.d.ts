import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserHeadTexturedMidProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserHeadTexturedMid: ForwardRefExoticComponent<UserHeadTexturedMidProps & RefAttributes<SVGSVGElement>>;

export default UserHeadTexturedMid;
export { UserHeadTexturedMid };
