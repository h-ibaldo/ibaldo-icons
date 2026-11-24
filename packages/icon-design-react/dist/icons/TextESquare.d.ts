import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextESquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextESquare: ForwardRefExoticComponent<TextESquareProps & RefAttributes<SVGSVGElement>>;

export default TextESquare;
export { TextESquare };
