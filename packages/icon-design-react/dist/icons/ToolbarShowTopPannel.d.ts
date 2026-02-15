import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ToolbarShowTopPannelProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ToolbarShowTopPannel: ForwardRefExoticComponent<ToolbarShowTopPannelProps & RefAttributes<SVGSVGElement>>;

export default ToolbarShowTopPannel;
export { ToolbarShowTopPannel };
