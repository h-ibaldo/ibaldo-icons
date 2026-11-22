import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PanelTopDashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PanelTopDash: ForwardRefExoticComponent<PanelTopDashProps & RefAttributes<SVGSVGElement>>;

export default PanelTopDash;
export { PanelTopDash };
