import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserFaceSpaceBunsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserFaceSpaceBuns: ForwardRefExoticComponent<UserFaceSpaceBunsProps & RefAttributes<SVGSVGElement>>;

export default UserFaceSpaceBuns;
export { UserFaceSpaceBuns };
