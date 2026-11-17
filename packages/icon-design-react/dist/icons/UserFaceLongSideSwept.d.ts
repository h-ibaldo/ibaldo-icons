import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserFaceLongSideSweptProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserFaceLongSideSwept: ForwardRefExoticComponent<UserFaceLongSideSweptProps & RefAttributes<SVGSVGElement>>;

export default UserFaceLongSideSwept;
export { UserFaceLongSideSwept };
