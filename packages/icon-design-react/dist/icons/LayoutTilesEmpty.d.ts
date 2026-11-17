import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LayoutTilesEmptyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LayoutTilesEmpty: ForwardRefExoticComponent<LayoutTilesEmptyProps & RefAttributes<SVGSVGElement>>;

export default LayoutTilesEmpty;
export { LayoutTilesEmpty };
