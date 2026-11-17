import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BriefcaseOpenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BriefcaseOpen: ForwardRefExoticComponent<BriefcaseOpenProps & RefAttributes<SVGSVGElement>>;

export default BriefcaseOpen;
export { BriefcaseOpen };
