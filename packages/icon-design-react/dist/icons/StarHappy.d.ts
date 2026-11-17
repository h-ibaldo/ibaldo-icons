import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StarHappyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StarHappy: ForwardRefExoticComponent<StarHappyProps & RefAttributes<SVGSVGElement>>;

export default StarHappy;
export { StarHappy };
