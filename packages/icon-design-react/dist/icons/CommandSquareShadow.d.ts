import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CommandSquareShadowProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CommandSquareShadow: ForwardRefExoticComponent<CommandSquareShadowProps & RefAttributes<SVGSVGElement>>;

export default CommandSquareShadow;
export { CommandSquareShadow };
