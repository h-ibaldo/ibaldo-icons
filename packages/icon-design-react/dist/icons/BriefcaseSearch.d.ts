import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BriefcaseSearchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BriefcaseSearch: ForwardRefExoticComponent<BriefcaseSearchProps & RefAttributes<SVGSVGElement>>;

export default BriefcaseSearch;
export { BriefcaseSearch };
