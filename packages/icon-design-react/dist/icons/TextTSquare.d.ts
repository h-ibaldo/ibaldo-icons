import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextTSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextTSquare: ForwardRefExoticComponent<TextTSquareProps & RefAttributes<SVGSVGElement>>;

export default TextTSquare;
export { TextTSquare };
