import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ToolbarShowRightPannelProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ToolbarShowRightPannel: ForwardRefExoticComponent<ToolbarShowRightPannelProps & RefAttributes<SVGSVGElement>>;

export default ToolbarShowRightPannel;
export { ToolbarShowRightPannel };
