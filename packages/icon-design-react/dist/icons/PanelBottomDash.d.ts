import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PanelBottomDashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PanelBottomDash: ForwardRefExoticComponent<PanelBottomDashProps & RefAttributes<SVGSVGElement>>;

export default PanelBottomDash;
export { PanelBottomDash };
