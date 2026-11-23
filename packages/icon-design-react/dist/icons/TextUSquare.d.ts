import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextUSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextUSquare: ForwardRefExoticComponent<TextUSquareProps & RefAttributes<SVGSVGElement>>;

export default TextUSquare;
export { TextUSquare };
