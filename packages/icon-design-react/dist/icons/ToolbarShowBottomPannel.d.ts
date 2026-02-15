import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ToolbarShowBottomPannelProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ToolbarShowBottomPannel: ForwardRefExoticComponent<ToolbarShowBottomPannelProps & RefAttributes<SVGSVGElement>>;

export default ToolbarShowBottomPannel;
export { ToolbarShowBottomPannel };
