import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserHeadsetSpikyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserHeadsetSpiky: ForwardRefExoticComponent<UserHeadsetSpikyProps & RefAttributes<SVGSVGElement>>;

export default UserHeadsetSpiky;
export { UserHeadsetSpiky };
