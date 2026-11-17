import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserHeadLongSideSweptProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserHeadLongSideSwept: ForwardRefExoticComponent<UserHeadLongSideSweptProps & RefAttributes<SVGSVGElement>>;

export default UserHeadLongSideSwept;
export { UserHeadLongSideSwept };
