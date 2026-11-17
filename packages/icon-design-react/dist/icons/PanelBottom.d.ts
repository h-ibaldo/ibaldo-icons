import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PanelBottomProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PanelBottom: ForwardRefExoticComponent<PanelBottomProps & RefAttributes<SVGSVGElement>>;

export default PanelBottom;
export { PanelBottom };
