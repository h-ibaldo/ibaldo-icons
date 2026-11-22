import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserArrowLeftCenterProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserArrowLeftCenter: ForwardRefExoticComponent<UserArrowLeftCenterProps & RefAttributes<SVGSVGElement>>;

export default UserArrowLeftCenter;
export { UserArrowLeftCenter };
