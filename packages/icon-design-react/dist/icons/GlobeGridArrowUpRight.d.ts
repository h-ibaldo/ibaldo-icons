import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GlobeGridArrowUpRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GlobeGridArrowUpRight: ForwardRefExoticComponent<GlobeGridArrowUpRightProps & RefAttributes<SVGSVGElement>>;

export default GlobeGridArrowUpRight;
export { GlobeGridArrowUpRight };
