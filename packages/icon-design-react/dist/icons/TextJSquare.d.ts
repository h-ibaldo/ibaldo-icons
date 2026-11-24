import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextJSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextJSquare: ForwardRefExoticComponent<TextJSquareProps & RefAttributes<SVGSVGElement>>;

export default TextJSquare;
export { TextJSquare };
