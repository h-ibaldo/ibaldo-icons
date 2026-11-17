import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BadgeQuestionPointedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BadgeQuestionPointed: ForwardRefExoticComponent<BadgeQuestionPointedProps & RefAttributes<SVGSVGElement>>;

export default BadgeQuestionPointed;
export { BadgeQuestionPointed };
