import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserSearchWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserSearchWide: ForwardRefExoticComponent<UserSearchWideProps & RefAttributes<SVGSVGElement>>;

export default UserSearchWide;
export { UserSearchWide };
