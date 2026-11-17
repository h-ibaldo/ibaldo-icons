import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserHeadCurlyTopProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserHeadCurlyTop: ForwardRefExoticComponent<UserHeadCurlyTopProps & RefAttributes<SVGSVGElement>>;

export default UserHeadCurlyTop;
export { UserHeadCurlyTop };
