import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextRSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextRSquare: ForwardRefExoticComponent<TextRSquareProps & RefAttributes<SVGSVGElement>>;

export default TextRSquare;
export { TextRSquare };
