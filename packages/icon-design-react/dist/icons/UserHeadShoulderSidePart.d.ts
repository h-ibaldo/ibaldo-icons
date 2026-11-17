import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserHeadShoulderSidePartProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserHeadShoulderSidePart: ForwardRefExoticComponent<UserHeadShoulderSidePartProps & RefAttributes<SVGSVGElement>>;

export default UserHeadShoulderSidePart;
export { UserHeadShoulderSidePart };
