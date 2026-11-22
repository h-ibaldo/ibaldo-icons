import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PanelRightDashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PanelRightDash: ForwardRefExoticComponent<PanelRightDashProps & RefAttributes<SVGSVGElement>>;

export default PanelRightDash;
export { PanelRightDash };
