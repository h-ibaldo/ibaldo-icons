import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ToolbarShowBottomPanelProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ToolbarShowBottomPanel: ForwardRefExoticComponent<ToolbarShowBottomPanelProps & RefAttributes<SVGSVGElement>>;

export default ToolbarShowBottomPanel;
export { ToolbarShowBottomPanel };
