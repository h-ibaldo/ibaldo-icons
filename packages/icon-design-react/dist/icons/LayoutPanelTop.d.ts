import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LayoutPanelTopProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LayoutPanelTop: ForwardRefExoticComponent<LayoutPanelTopProps & RefAttributes<SVGSVGElement>>;

export default LayoutPanelTop;
export { LayoutPanelTop };
