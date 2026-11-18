import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScanWindowProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScanWindow: ForwardRefExoticComponent<ScanWindowProps & RefAttributes<SVGSVGElement>>;

export default ScanWindow;
export { ScanWindow };
