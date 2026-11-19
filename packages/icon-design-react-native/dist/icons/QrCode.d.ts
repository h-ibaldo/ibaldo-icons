import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface QrCodeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const QrCode: ForwardRefExoticComponent<QrCodeProps & RefAttributes<Svg>>;

export default QrCode;
export { QrCode };
