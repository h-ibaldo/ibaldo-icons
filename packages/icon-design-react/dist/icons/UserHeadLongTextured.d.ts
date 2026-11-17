import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserHeadLongTexturedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserHeadLongTextured: ForwardRefExoticComponent<UserHeadLongTexturedProps & RefAttributes<SVGSVGElement>>;

export default UserHeadLongTextured;
export { UserHeadLongTextured };
