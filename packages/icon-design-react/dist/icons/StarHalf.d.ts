import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StarHalfProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StarHalf: ForwardRefExoticComponent<StarHalfProps & RefAttributes<SVGSVGElement>>;

export default StarHalf;
export { StarHalf };
