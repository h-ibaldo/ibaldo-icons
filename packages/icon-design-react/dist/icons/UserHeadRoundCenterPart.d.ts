import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserHeadRoundCenterPartProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserHeadRoundCenterPart: ForwardRefExoticComponent<UserHeadRoundCenterPartProps & RefAttributes<SVGSVGElement>>;

export default UserHeadRoundCenterPart;
export { UserHeadRoundCenterPart };
