import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BriefcaseStripedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BriefcaseStriped: ForwardRefExoticComponent<BriefcaseStripedProps & RefAttributes<SVGSVGElement>>;

export default BriefcaseStriped;
export { BriefcaseStriped };
