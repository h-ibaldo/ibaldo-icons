import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserHeadBluntBobProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserHeadBluntBob: ForwardRefExoticComponent<UserHeadBluntBobProps & RefAttributes<SVGSVGElement>>;

export default UserHeadBluntBob;
export { UserHeadBluntBob };
