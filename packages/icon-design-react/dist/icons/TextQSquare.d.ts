import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextQSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextQSquare: ForwardRefExoticComponent<TextQSquareProps & RefAttributes<SVGSVGElement>>;

export default TextQSquare;
export { TextQSquare };
