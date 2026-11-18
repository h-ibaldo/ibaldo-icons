import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GlobeArrowUpRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GlobeArrowUpRight: ForwardRefExoticComponent<GlobeArrowUpRightProps & RefAttributes<SVGSVGElement>>;

export default GlobeArrowUpRight;
export { GlobeArrowUpRight };
