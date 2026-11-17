import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BriefcaseBeltSlotProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BriefcaseBeltSlot: ForwardRefExoticComponent<BriefcaseBeltSlotProps & RefAttributes<SVGSVGElement>>;

export default BriefcaseBeltSlot;
export { BriefcaseBeltSlot };
