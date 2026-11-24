import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextWCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextWCircle: ForwardRefExoticComponent<TextWCircleProps & RefAttributes<SVGSVGElement>>;

export default TextWCircle;
export { TextWCircle };
