import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BadgeQuestionPetalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BadgeQuestionPetal: ForwardRefExoticComponent<BadgeQuestionPetalProps & RefAttributes<SVGSVGElement>>;

export default BadgeQuestionPetal;
export { BadgeQuestionPetal };
