import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextAdSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextAdSquare: ForwardRefExoticComponent<TextAdSquareProps & RefAttributes<SVGSVGElement>>;

export default TextAdSquare;
export { TextAdSquare };
