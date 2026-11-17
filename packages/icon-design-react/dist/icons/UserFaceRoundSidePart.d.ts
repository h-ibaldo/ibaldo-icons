import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserFaceRoundSidePartProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserFaceRoundSidePart: ForwardRefExoticComponent<UserFaceRoundSidePartProps & RefAttributes<SVGSVGElement>>;

export default UserFaceRoundSidePart;
export { UserFaceRoundSidePart };
