import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserHeadTexturedPuffsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserHeadTexturedPuffs: ForwardRefExoticComponent<UserHeadTexturedPuffsProps & RefAttributes<SVGSVGElement>>;

export default UserHeadTexturedPuffs;
export { UserHeadTexturedPuffs };
