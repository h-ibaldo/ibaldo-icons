import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserArrowLeftCenterWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserArrowLeftCenterWide: ForwardRefExoticComponent<UserArrowLeftCenterWideProps & RefAttributes<SVGSVGElement>>;

export default UserArrowLeftCenterWide;
export { UserArrowLeftCenterWide };
