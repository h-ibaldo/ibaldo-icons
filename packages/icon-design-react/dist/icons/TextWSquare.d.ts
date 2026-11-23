import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextWSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextWSquare: ForwardRefExoticComponent<TextWSquareProps & RefAttributes<SVGSVGElement>>;

export default TextWSquare;
export { TextWSquare };
