import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BadgeQuestionBumpyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BadgeQuestionBumpy: ForwardRefExoticComponent<BadgeQuestionBumpyProps & RefAttributes<SVGSVGElement>>;

export default BadgeQuestionBumpy;
export { BadgeQuestionBumpy };
