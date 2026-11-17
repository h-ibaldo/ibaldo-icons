import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserFaceLongTexturedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserFaceLongTextured: ForwardRefExoticComponent<UserFaceLongTexturedProps & RefAttributes<SVGSVGElement>>;

export default UserFaceLongTextured;
export { UserFaceLongTextured };
