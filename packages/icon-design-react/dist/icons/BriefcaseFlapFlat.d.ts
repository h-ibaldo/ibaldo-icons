import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BriefcaseFlapFlatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BriefcaseFlapFlat: ForwardRefExoticComponent<BriefcaseFlapFlatProps & RefAttributes<SVGSVGElement>>;

export default BriefcaseFlapFlat;
export { BriefcaseFlapFlat };
