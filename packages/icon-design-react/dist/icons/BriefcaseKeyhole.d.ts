import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BriefcaseKeyholeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BriefcaseKeyhole: ForwardRefExoticComponent<BriefcaseKeyholeProps & RefAttributes<SVGSVGElement>>;

export default BriefcaseKeyhole;
export { BriefcaseKeyhole };
