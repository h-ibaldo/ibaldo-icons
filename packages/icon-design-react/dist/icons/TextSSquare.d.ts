import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextSSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextSSquare: ForwardRefExoticComponent<TextSSquareProps & RefAttributes<SVGSVGElement>>;

export default TextSSquare;
export { TextSSquare };
