import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserClockWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserClockWide: ForwardRefExoticComponent<UserClockWideProps & RefAttributes<SVGSVGElement>>;

export default UserClockWide;
export { UserClockWide };
