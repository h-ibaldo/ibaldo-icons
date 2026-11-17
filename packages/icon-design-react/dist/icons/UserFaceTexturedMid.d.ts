import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserFaceTexturedMidProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserFaceTexturedMid: ForwardRefExoticComponent<UserFaceTexturedMidProps & RefAttributes<SVGSVGElement>>;

export default UserFaceTexturedMid;
export { UserFaceTexturedMid };
