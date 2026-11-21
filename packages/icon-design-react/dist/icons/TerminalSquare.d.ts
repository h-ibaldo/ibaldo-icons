import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TerminalSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TerminalSquare: ForwardRefExoticComponent<TerminalSquareProps & RefAttributes<SVGSVGElement>>;

export default TerminalSquare;
export { TerminalSquare };
