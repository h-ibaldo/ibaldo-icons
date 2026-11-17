import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserHeadSpikyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserHeadSpiky: ForwardRefExoticComponent<UserHeadSpikyProps & RefAttributes<SVGSVGElement>>;

export default UserHeadSpiky;
export { UserHeadSpiky };
