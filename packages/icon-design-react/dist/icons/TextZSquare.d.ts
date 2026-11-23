import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextZSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextZSquare: ForwardRefExoticComponent<TextZSquareProps & RefAttributes<SVGSVGElement>>;

export default TextZSquare;
export { TextZSquare };
