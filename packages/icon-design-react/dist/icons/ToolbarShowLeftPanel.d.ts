import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ToolbarShowLeftPanelProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ToolbarShowLeftPanel: ForwardRefExoticComponent<ToolbarShowLeftPanelProps & RefAttributes<SVGSVGElement>>;

export default ToolbarShowLeftPanel;
export { ToolbarShowLeftPanel };
