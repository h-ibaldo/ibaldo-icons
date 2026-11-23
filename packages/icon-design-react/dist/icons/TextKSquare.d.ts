import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextKSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextKSquare: ForwardRefExoticComponent<TextKSquareProps & RefAttributes<SVGSVGElement>>;

export default TextKSquare;
export { TextKSquare };
