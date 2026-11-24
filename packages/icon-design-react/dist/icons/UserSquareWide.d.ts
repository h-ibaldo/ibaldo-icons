import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserSquareWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserSquareWide: ForwardRefExoticComponent<UserSquareWideProps & RefAttributes<SVGSVGElement>>;

export default UserSquareWide;
export { UserSquareWide };
