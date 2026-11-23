import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextDSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextDSquare: ForwardRefExoticComponent<TextDSquareProps & RefAttributes<SVGSVGElement>>;

export default TextDSquare;
export { TextDSquare };
