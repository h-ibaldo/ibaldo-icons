import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserFaceTopKnotProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserFaceTopKnot: ForwardRefExoticComponent<UserFaceTopKnotProps & RefAttributes<SVGSVGElement>>;

export default UserFaceTopKnot;
export { UserFaceTopKnot };
