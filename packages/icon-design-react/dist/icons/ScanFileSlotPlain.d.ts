import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScanFileSlotPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScanFileSlotPlain: ForwardRefExoticComponent<ScanFileSlotPlainProps & RefAttributes<SVGSVGElement>>;

export default ScanFileSlotPlain;
export { ScanFileSlotPlain };
