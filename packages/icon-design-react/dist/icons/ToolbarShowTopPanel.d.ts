import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ToolbarShowTopPanelProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ToolbarShowTopPanel: ForwardRefExoticComponent<ToolbarShowTopPanelProps & RefAttributes<SVGSVGElement>>;

export default ToolbarShowTopPanel;
export { ToolbarShowTopPanel };
