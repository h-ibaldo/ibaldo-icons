import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AlarmQuestionStraightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AlarmQuestionStraight: ForwardRefExoticComponent<AlarmQuestionStraightProps & RefAttributes<SVGSVGElement>>;

export default AlarmQuestionStraight;
export { AlarmQuestionStraight };
