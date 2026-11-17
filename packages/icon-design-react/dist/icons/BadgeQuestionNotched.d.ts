import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BadgeQuestionNotchedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BadgeQuestionNotched: ForwardRefExoticComponent<BadgeQuestionNotchedProps & RefAttributes<SVGSVGElement>>;

export default BadgeQuestionNotched;
export { BadgeQuestionNotched };
