import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ReceiptRupeeWavyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ReceiptRupeeWavy: ForwardRefExoticComponent<ReceiptRupeeWavyProps & RefAttributes<Svg>>;

export default ReceiptRupeeWavy;
export { ReceiptRupeeWavy };
