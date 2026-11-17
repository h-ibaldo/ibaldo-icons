import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserFaceTexturedPuffsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserFaceTexturedPuffs: ForwardRefExoticComponent<UserFaceTexturedPuffsProps & RefAttributes<SVGSVGElement>>;

export default UserFaceTexturedPuffs;
export { UserFaceTexturedPuffs };
