import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextLSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextLSquare: ForwardRefExoticComponent<TextLSquareProps & RefAttributes<SVGSVGElement>>;

export default TextLSquare;
export { TextLSquare };
