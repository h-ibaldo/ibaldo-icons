import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BadgeQuestionWavyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BadgeQuestionWavy: ForwardRefExoticComponent<BadgeQuestionWavyProps & RefAttributes<SVGSVGElement>>;

export default BadgeQuestionWavy;
export { BadgeQuestionWavy };
