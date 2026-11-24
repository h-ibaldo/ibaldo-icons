import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextGSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextGSquare: ForwardRefExoticComponent<TextGSquareProps & RefAttributes<SVGSVGElement>>;

export default TextGSquare;
export { TextGSquare };
