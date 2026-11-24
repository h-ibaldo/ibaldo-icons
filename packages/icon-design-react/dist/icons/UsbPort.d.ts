import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UsbPortProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UsbPort: ForwardRefExoticComponent<UsbPortProps & RefAttributes<SVGSVGElement>>;

export default UsbPort;
export { UsbPort };
