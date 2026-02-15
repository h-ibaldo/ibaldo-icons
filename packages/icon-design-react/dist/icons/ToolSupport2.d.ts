import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ToolSupport2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ToolSupport2: ForwardRefExoticComponent<ToolSupport2Props & RefAttributes<SVGSVGElement>>;

export default ToolSupport2;
export { ToolSupport2 };
