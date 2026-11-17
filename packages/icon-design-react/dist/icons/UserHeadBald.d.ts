import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserHeadBaldProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserHeadBald: ForwardRefExoticComponent<UserHeadBaldProps & RefAttributes<SVGSVGElement>>;

export default UserHeadBald;
export { UserHeadBald };
