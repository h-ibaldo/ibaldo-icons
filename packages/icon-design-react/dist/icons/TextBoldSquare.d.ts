import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextBoldSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextBoldSquare: ForwardRefExoticComponent<TextBoldSquareProps & RefAttributes<SVGSVGElement>>;

export default TextBoldSquare;
export { TextBoldSquare };
