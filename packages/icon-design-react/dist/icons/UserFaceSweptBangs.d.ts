import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserFaceSweptBangsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserFaceSweptBangs: ForwardRefExoticComponent<UserFaceSweptBangsProps & RefAttributes<SVGSVGElement>>;

export default UserFaceSweptBangs;
export { UserFaceSweptBangs };
