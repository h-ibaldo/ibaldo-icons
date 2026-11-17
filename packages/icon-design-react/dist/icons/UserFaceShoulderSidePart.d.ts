import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserFaceShoulderSidePartProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserFaceShoulderSidePart: ForwardRefExoticComponent<UserFaceShoulderSidePartProps & RefAttributes<SVGSVGElement>>;

export default UserFaceShoulderSidePart;
export { UserFaceShoulderSidePart };
