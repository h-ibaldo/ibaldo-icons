import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UsbStickProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UsbStick: ForwardRefExoticComponent<UsbStickProps & RefAttributes<SVGSVGElement>>;

export default UsbStick;
export { UsbStick };
