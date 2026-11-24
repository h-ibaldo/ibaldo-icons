import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserArrowLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserArrowLeft: ForwardRefExoticComponent<UserArrowLeftProps & RefAttributes<SVGSVGElement>>;

export default UserArrowLeft;
export { UserArrowLeft };
