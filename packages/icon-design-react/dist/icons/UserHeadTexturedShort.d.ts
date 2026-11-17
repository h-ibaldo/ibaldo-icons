import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserHeadTexturedShortProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserHeadTexturedShort: ForwardRefExoticComponent<UserHeadTexturedShortProps & RefAttributes<SVGSVGElement>>;

export default UserHeadTexturedShort;
export { UserHeadTexturedShort };
