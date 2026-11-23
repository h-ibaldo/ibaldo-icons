import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextFSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextFSquare: ForwardRefExoticComponent<TextFSquareProps & RefAttributes<SVGSVGElement>>;

export default TextFSquare;
export { TextFSquare };
