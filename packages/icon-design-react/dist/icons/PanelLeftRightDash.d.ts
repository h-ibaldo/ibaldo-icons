import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PanelLeftRightDashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PanelLeftRightDash: ForwardRefExoticComponent<PanelLeftRightDashProps & RefAttributes<SVGSVGElement>>;

export default PanelLeftRightDash;
export { PanelLeftRightDash };
