import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BadgeQuestionProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BadgeQuestion: ForwardRefExoticComponent<BadgeQuestionProps & RefAttributes<SVGSVGElement>>;

export default BadgeQuestion;
export { BadgeQuestion };
