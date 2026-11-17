import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UserHeadLongWavyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UserHeadLongWavy: ForwardRefExoticComponent<UserHeadLongWavyProps & RefAttributes<SVGSVGElement>>;

export default UserHeadLongWavy;
export { UserHeadLongWavy };
