import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserFaceCurlyTopProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserFaceCurlyTop: ForwardRefExoticComponent<UserFaceCurlyTopProps & RefAttributes<SVGSVGElement>>;

export default UserFaceCurlyTop;
export { UserFaceCurlyTop };
