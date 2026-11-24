import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LayoutPanelLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LayoutPanelLeft: ForwardRefExoticComponent<LayoutPanelLeftProps & RefAttributes<SVGSVGElement>>;

export default LayoutPanelLeft;
export { LayoutPanelLeft };
