import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextWProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextW: ForwardRefExoticComponent<TextWProps & RefAttributes<SVGSVGElement>>;

export default TextW;
export { TextW };
