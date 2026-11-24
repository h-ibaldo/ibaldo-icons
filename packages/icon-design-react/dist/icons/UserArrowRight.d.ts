import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserArrowRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserArrowRight: ForwardRefExoticComponent<UserArrowRightProps & RefAttributes<SVGSVGElement>>;

export default UserArrowRight;
export { UserArrowRight };
