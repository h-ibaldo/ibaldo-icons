import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PanelTopProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PanelTop: ForwardRefExoticComponent<PanelTopProps & RefAttributes<SVGSVGElement>>;

export default PanelTop;
export { PanelTop };
