import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextNSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextNSquare: ForwardRefExoticComponent<TextNSquareProps & RefAttributes<SVGSVGElement>>;

export default TextNSquare;
export { TextNSquare };
