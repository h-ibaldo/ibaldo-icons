import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckDoubleJoinedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckDoubleJoined: ForwardRefExoticComponent<CheckDoubleJoinedProps & RefAttributes<SVGSVGElement>>;

export default CheckDoubleJoined;
export { CheckDoubleJoined };
