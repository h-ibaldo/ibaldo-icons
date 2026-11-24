import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserPlusWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserPlusWide: ForwardRefExoticComponent<UserPlusWideProps & RefAttributes<SVGSVGElement>>;

export default UserPlusWide;
export { UserPlusWide };
