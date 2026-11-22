import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserEditWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserEditWide: ForwardRefExoticComponent<UserEditWideProps & RefAttributes<SVGSVGElement>>;

export default UserEditWide;
export { UserEditWide };
