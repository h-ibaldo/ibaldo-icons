import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ToolboxAngledProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ToolboxAngled: ForwardRefExoticComponent<ToolboxAngledProps & RefAttributes<SVGSVGElement>>;

export default ToolboxAngled;
export { ToolboxAngled };
