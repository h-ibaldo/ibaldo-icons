import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BriefcaseHandleLongProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BriefcaseHandleLong: ForwardRefExoticComponent<BriefcaseHandleLongProps & RefAttributes<SVGSVGElement>>;

export default BriefcaseHandleLong;
export { BriefcaseHandleLong };
