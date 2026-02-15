import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ToolboxProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Toolbox: ForwardRefExoticComponent<ToolboxProps & RefAttributes<SVGSVGElement>>;

export default Toolbox;
export { Toolbox };
