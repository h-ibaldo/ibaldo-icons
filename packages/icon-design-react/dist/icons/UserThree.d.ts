import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserThreeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserThree: ForwardRefExoticComponent<UserThreeProps & RefAttributes<SVGSVGElement>>;

export default UserThree;
export { UserThree };
