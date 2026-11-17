import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserFaceLongWavyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserFaceLongWavy: ForwardRefExoticComponent<UserFaceLongWavyProps & RefAttributes<SVGSVGElement>>;

export default UserFaceLongWavy;
export { UserFaceLongWavy };
