import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AlarmQuestionBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AlarmQuestionBare: ForwardRefExoticComponent<AlarmQuestionBareProps & RefAttributes<SVGSVGElement>>;

export default AlarmQuestionBare;
export { AlarmQuestionBare };
