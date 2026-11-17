import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserHeadCurlyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserHeadCurly: ForwardRefExoticComponent<UserHeadCurlyProps & RefAttributes<SVGSVGElement>>;

export default UserHeadCurly;
export { UserHeadCurly };
