import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserArrowUpWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserArrowUpWide: ForwardRefExoticComponent<UserArrowUpWideProps & RefAttributes<SVGSVGElement>>;

export default UserArrowUpWide;
export { UserArrowUpWide };
