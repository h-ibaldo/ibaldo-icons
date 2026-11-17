import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AlarmQuestionProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AlarmQuestion: ForwardRefExoticComponent<AlarmQuestionProps & RefAttributes<SVGSVGElement>>;

export default AlarmQuestion;
export { AlarmQuestion };
