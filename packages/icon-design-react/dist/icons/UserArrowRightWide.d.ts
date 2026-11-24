import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserArrowRightWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserArrowRightWide: ForwardRefExoticComponent<UserArrowRightWideProps & RefAttributes<SVGSVGElement>>;

export default UserArrowRightWide;
export { UserArrowRightWide };
