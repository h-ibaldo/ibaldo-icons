import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextISquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextISquare: ForwardRefExoticComponent<TextISquareProps & RefAttributes<SVGSVGElement>>;

export default TextISquare;
export { TextISquare };
