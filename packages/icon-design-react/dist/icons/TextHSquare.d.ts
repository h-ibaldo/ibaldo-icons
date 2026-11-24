import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextHSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextHSquare: ForwardRefExoticComponent<TextHSquareProps & RefAttributes<SVGSVGElement>>;

export default TextHSquare;
export { TextHSquare };
