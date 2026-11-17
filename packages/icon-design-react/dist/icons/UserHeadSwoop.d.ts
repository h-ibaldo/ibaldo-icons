import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserHeadSwoopProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserHeadSwoop: ForwardRefExoticComponent<UserHeadSwoopProps & RefAttributes<SVGSVGElement>>;

export default UserHeadSwoop;
export { UserHeadSwoop };
