import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TerminalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Terminal: ForwardRefExoticComponent<TerminalProps & RefAttributes<SVGSVGElement>>;

export default Terminal;
export { Terminal };
