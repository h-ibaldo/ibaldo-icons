import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PanelLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PanelLeft: ForwardRefExoticComponent<PanelLeftProps & RefAttributes<SVGSVGElement>>;

export default PanelLeft;
export { PanelLeft };
