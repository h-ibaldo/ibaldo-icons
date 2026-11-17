import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BadgeRosetteQuestionUnverifiedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BadgeRosetteQuestionUnverified: ForwardRefExoticComponent<BadgeRosetteQuestionUnverifiedProps & RefAttributes<SVGSVGElement>>;

export default BadgeRosetteQuestionUnverified;
export { BadgeRosetteQuestionUnverified };
