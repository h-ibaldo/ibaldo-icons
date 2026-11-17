import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserHeadFlippedEndsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserHeadFlippedEnds: ForwardRefExoticComponent<UserHeadFlippedEndsProps & RefAttributes<SVGSVGElement>>;

export default UserHeadFlippedEnds;
export { UserHeadFlippedEnds };
