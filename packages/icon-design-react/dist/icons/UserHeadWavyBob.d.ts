import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserHeadWavyBobProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserHeadWavyBob: ForwardRefExoticComponent<UserHeadWavyBobProps & RefAttributes<SVGSVGElement>>;

export default UserHeadWavyBob;
export { UserHeadWavyBob };
