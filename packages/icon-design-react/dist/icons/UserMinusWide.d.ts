import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserMinusWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserMinusWide: ForwardRefExoticComponent<UserMinusWideProps & RefAttributes<SVGSVGElement>>;

export default UserMinusWide;
export { UserMinusWide };
