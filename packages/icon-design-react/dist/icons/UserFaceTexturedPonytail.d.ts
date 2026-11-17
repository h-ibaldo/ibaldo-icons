import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserFaceTexturedPonytailProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserFaceTexturedPonytail: ForwardRefExoticComponent<UserFaceTexturedPonytailProps & RefAttributes<SVGSVGElement>>;

export default UserFaceTexturedPonytail;
export { UserFaceTexturedPonytail };
