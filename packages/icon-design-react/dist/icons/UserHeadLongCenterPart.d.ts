import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserHeadLongCenterPartProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserHeadLongCenterPart: ForwardRefExoticComponent<UserHeadLongCenterPartProps & RefAttributes<SVGSVGElement>>;

export default UserHeadLongCenterPart;
export { UserHeadLongCenterPart };
