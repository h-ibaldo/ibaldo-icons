import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BriefcaseSideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BriefcaseSide: ForwardRefExoticComponent<BriefcaseSideProps & RefAttributes<SVGSVGElement>>;

export default BriefcaseSide;
export { BriefcaseSide };
