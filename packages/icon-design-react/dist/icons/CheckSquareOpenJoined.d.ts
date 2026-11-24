import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckSquareOpenJoinedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckSquareOpenJoined: ForwardRefExoticComponent<CheckSquareOpenJoinedProps & RefAttributes<SVGSVGElement>>;

export default CheckSquareOpenJoined;
export { CheckSquareOpenJoined };
