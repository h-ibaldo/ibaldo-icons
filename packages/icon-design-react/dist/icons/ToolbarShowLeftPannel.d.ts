import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ToolbarShowLeftPannelProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ToolbarShowLeftPannel: ForwardRefExoticComponent<ToolbarShowLeftPannelProps & RefAttributes<SVGSVGElement>>;

export default ToolbarShowLeftPannel;
export { ToolbarShowLeftPannel };
