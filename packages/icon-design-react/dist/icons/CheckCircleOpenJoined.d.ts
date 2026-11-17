import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckCircleOpenJoinedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckCircleOpenJoined: ForwardRefExoticComponent<CheckCircleOpenJoinedProps & RefAttributes<SVGSVGElement>>;

export default CheckCircleOpenJoined;
export { CheckCircleOpenJoined };
