import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserFaceCurlyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserFaceCurly: ForwardRefExoticComponent<UserFaceCurlyProps & RefAttributes<SVGSVGElement>>;

export default UserFaceCurly;
export { UserFaceCurly };
