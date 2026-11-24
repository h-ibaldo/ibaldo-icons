import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextVSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextVSquare: ForwardRefExoticComponent<TextVSquareProps & RefAttributes<SVGSVGElement>>;

export default TextVSquare;
export { TextVSquare };
