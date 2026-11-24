import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserGroupContourProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserGroupContour: ForwardRefExoticComponent<UserGroupContourProps & RefAttributes<SVGSVGElement>>;

export default UserGroupContour;
export { UserGroupContour };
