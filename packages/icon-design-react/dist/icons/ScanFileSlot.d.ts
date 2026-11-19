import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScanFileSlotProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScanFileSlot: ForwardRefExoticComponent<ScanFileSlotProps & RefAttributes<SVGSVGElement>>;

export default ScanFileSlot;
export { ScanFileSlot };
