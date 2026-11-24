import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserCheckWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserCheckWide: ForwardRefExoticComponent<UserCheckWideProps & RefAttributes<SVGSVGElement>>;

export default UserCheckWide;
export { UserCheckWide };
