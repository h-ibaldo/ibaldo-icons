import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserFaceSideSweptShortProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserFaceSideSweptShort: ForwardRefExoticComponent<UserFaceSideSweptShortProps & RefAttributes<SVGSVGElement>>;

export default UserFaceSideSweptShort;
export { UserFaceSideSweptShort };
