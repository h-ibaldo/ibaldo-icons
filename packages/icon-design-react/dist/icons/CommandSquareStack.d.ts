import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CommandSquareStackProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CommandSquareStack: ForwardRefExoticComponent<CommandSquareStackProps & RefAttributes<SVGSVGElement>>;

export default CommandSquareStack;
export { CommandSquareStack };
