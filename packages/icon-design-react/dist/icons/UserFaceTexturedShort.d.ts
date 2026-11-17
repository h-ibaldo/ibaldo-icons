import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserFaceTexturedShortProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserFaceTexturedShort: ForwardRefExoticComponent<UserFaceTexturedShortProps & RefAttributes<SVGSVGElement>>;

export default UserFaceTexturedShort;
export { UserFaceTexturedShort };
