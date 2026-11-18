import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextAaSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextAaSquare: ForwardRefExoticComponent<TextAaSquareProps & RefAttributes<SVGSVGElement>>;

export default TextAaSquare;
export { TextAaSquare };
