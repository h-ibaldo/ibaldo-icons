import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ReceiptDollarWavyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ReceiptDollarWavy: ForwardRefExoticComponent<ReceiptDollarWavyProps & RefAttributes<Svg>>;

export default ReceiptDollarWavy;
export { ReceiptDollarWavy };
