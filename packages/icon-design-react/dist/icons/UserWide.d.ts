import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserWide: ForwardRefExoticComponent<UserWideProps & RefAttributes<SVGSVGElement>>;

export default UserWide;
export { UserWide };
