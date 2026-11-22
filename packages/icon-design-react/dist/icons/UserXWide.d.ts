import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserXWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserXWide: ForwardRefExoticComponent<UserXWideProps & RefAttributes<SVGSVGElement>>;

export default UserXWide;
export { UserXWide };
