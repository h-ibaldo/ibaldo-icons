import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserHeadShoulderCenterPartProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserHeadShoulderCenterPart: ForwardRefExoticComponent<UserHeadShoulderCenterPartProps & RefAttributes<SVGSVGElement>>;

export default UserHeadShoulderCenterPart;
export { UserHeadShoulderCenterPart };
