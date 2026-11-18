import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CommandSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CommandSquare: ForwardRefExoticComponent<CommandSquareProps & RefAttributes<SVGSVGElement>>;

export default CommandSquare;
export { CommandSquare };
