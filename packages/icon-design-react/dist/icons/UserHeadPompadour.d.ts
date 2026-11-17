import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserHeadPompadourProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserHeadPompadour: ForwardRefExoticComponent<UserHeadPompadourProps & RefAttributes<SVGSVGElement>>;

export default UserHeadPompadour;
export { UserHeadPompadour };
