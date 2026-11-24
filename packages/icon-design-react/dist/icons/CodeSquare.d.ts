import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CodeSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CodeSquare: ForwardRefExoticComponent<CodeSquareProps & RefAttributes<SVGSVGElement>>;

export default CodeSquare;
export { CodeSquare };
