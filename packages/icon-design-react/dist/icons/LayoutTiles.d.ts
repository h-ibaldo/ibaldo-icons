import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LayoutTilesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LayoutTiles: ForwardRefExoticComponent<LayoutTilesProps & RefAttributes<SVGSVGElement>>;

export default LayoutTiles;
export { LayoutTiles };
