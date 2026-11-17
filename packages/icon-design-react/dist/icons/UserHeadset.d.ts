import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserHeadsetProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserHeadset: ForwardRefExoticComponent<UserHeadsetProps & RefAttributes<SVGSVGElement>>;

export default UserHeadset;
export { UserHeadset };
