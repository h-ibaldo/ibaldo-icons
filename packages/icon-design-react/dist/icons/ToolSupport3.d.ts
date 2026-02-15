import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ToolSupport3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ToolSupport3: ForwardRefExoticComponent<ToolSupport3Props & RefAttributes<SVGSVGElement>>;

export default ToolSupport3;
export { ToolSupport3 };
