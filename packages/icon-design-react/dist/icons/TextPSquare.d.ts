import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextPSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextPSquare: ForwardRefExoticComponent<TextPSquareProps & RefAttributes<SVGSVGElement>>;

export default TextPSquare;
export { TextPSquare };
