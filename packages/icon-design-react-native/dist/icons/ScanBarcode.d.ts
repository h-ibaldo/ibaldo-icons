import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ScanBarcodeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ScanBarcode: ForwardRefExoticComponent<ScanBarcodeProps & RefAttributes<Svg>>;

export default ScanBarcode;
export { ScanBarcode };
