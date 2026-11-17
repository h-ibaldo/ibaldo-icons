import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserHeadCrewCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserHeadCrewCut: ForwardRefExoticComponent<UserHeadCrewCutProps & RefAttributes<SVGSVGElement>>;

export default UserHeadCrewCut;
export { UserHeadCrewCut };
