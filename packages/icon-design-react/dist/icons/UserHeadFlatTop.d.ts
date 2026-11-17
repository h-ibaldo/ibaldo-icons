import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserHeadFlatTopProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserHeadFlatTop: ForwardRefExoticComponent<UserHeadFlatTopProps & RefAttributes<SVGSVGElement>>;

export default UserHeadFlatTop;
export { UserHeadFlatTop };
