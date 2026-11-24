import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LayoutPanelTopUnevenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LayoutPanelTopUneven: ForwardRefExoticComponent<LayoutPanelTopUnevenProps & RefAttributes<SVGSVGElement>>;

export default LayoutPanelTopUneven;
export { LayoutPanelTopUneven };
