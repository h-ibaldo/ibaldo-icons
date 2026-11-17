import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserFaceFlippedEndsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserFaceFlippedEnds: ForwardRefExoticComponent<UserFaceFlippedEndsProps & RefAttributes<SVGSVGElement>>;

export default UserFaceFlippedEnds;
export { UserFaceFlippedEnds };
