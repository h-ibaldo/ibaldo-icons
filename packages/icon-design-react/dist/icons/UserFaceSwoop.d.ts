import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserFaceSwoopProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserFaceSwoop: ForwardRefExoticComponent<UserFaceSwoopProps & RefAttributes<SVGSVGElement>>;

export default UserFaceSwoop;
export { UserFaceSwoop };
