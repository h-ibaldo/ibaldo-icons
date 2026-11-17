import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BriefcaseFlapWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BriefcaseFlapWide: ForwardRefExoticComponent<BriefcaseFlapWideProps & RefAttributes<SVGSVGElement>>;

export default BriefcaseFlapWide;
export { BriefcaseFlapWide };
