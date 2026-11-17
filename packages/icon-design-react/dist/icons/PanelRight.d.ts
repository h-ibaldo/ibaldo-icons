import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PanelRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PanelRight: ForwardRefExoticComponent<PanelRightProps & RefAttributes<SVGSVGElement>>;

export default PanelRight;
export { PanelRight };
