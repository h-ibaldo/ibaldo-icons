import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserFaceSpikyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserFaceSpiky: ForwardRefExoticComponent<UserFaceSpikyProps & RefAttributes<SVGSVGElement>>;

export default UserFaceSpiky;
export { UserFaceSpiky };
