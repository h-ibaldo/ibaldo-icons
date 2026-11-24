import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BadgeQuestionJaggedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BadgeQuestionJagged: ForwardRefExoticComponent<BadgeQuestionJaggedProps & RefAttributes<SVGSVGElement>>;

export default BadgeQuestionJagged;
export { BadgeQuestionJagged };
