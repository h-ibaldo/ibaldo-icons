import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ToolbarStart2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ToolbarStart2: ForwardRefExoticComponent<ToolbarStart2Props & RefAttributes<SVGSVGElement>>;

export default ToolbarStart2;
export { ToolbarStart2 };
