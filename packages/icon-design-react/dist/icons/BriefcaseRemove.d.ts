import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BriefcaseRemoveProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BriefcaseRemove: ForwardRefExoticComponent<BriefcaseRemoveProps & RefAttributes<SVGSVGElement>>;

export default BriefcaseRemove;
export { BriefcaseRemove };
