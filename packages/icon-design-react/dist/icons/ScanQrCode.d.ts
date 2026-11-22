import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScanQrCodeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScanQrCode: ForwardRefExoticComponent<ScanQrCodeProps & RefAttributes<SVGSVGElement>>;

export default ScanQrCode;
export { ScanQrCode };
