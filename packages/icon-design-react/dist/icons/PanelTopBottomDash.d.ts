import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PanelTopBottomDashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PanelTopBottomDash: ForwardRefExoticComponent<PanelTopBottomDashProps & RefAttributes<SVGSVGElement>>;

export default PanelTopBottomDash;
export { PanelTopBottomDash };
