import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserHeadSpaceBunsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserHeadSpaceBuns: ForwardRefExoticComponent<UserHeadSpaceBunsProps & RefAttributes<SVGSVGElement>>;

export default UserHeadSpaceBuns;
export { UserHeadSpaceBuns };
