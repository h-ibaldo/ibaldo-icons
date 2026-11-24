import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextXSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextXSquare: ForwardRefExoticComponent<TextXSquareProps & RefAttributes<SVGSVGElement>>;

export default TextXSquare;
export { TextXSquare };
