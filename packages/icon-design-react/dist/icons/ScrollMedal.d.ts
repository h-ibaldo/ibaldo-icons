import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScrollMedalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScrollMedal: ForwardRefExoticComponent<ScrollMedalProps & RefAttributes<SVGSVGElement>>;

export default ScrollMedal;
export { ScrollMedal };
