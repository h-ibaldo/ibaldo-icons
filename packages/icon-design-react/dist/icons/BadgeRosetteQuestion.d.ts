import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BadgeRosetteQuestionProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BadgeRosetteQuestion: ForwardRefExoticComponent<BadgeRosetteQuestionProps & RefAttributes<SVGSVGElement>>;

export default BadgeRosetteQuestion;
export { BadgeRosetteQuestion };
