import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextCSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextCSquare: ForwardRefExoticComponent<TextCSquareProps & RefAttributes<SVGSVGElement>>;

export default TextCSquare;
export { TextCSquare };
