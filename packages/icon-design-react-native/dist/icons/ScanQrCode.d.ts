import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ScanQrCodeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ScanQrCode: ForwardRefExoticComponent<ScanQrCodeProps & RefAttributes<Svg>>;

export default ScanQrCode;
export { ScanQrCode };
