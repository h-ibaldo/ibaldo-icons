import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CommandProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Command: ForwardRefExoticComponent<CommandProps & RefAttributes<SVGSVGElement>>;

export default Command;
export { Command };
