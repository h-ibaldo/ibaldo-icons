import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextASquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextASquare: ForwardRefExoticComponent<TextASquareProps & RefAttributes<SVGSVGElement>>;

export default TextASquare;
export { TextASquare };
