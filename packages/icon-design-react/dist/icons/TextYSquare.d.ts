import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextYSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextYSquare: ForwardRefExoticComponent<TextYSquareProps & RefAttributes<SVGSVGElement>>;

export default TextYSquare;
export { TextYSquare };
