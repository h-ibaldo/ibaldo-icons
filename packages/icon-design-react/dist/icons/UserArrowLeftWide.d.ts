import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserArrowLeftWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserArrowLeftWide: ForwardRefExoticComponent<UserArrowLeftWideProps & RefAttributes<SVGSVGElement>>;

export default UserArrowLeftWide;
export { UserArrowLeftWide };
