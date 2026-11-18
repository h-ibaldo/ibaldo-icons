import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface QuestionCirclePointerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const QuestionCirclePointer: ForwardRefExoticComponent<QuestionCirclePointerProps & RefAttributes<SVGSVGElement>>;

export default QuestionCirclePointer;
export { QuestionCirclePointer };
