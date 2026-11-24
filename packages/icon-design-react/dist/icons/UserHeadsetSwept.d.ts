import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserHeadsetSweptProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserHeadsetSwept: ForwardRefExoticComponent<UserHeadsetSweptProps & RefAttributes<SVGSVGElement>>;

export default UserHeadsetSwept;
export { UserHeadsetSwept };
