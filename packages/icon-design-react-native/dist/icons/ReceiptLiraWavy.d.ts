import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ReceiptLiraWavyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ReceiptLiraWavy: ForwardRefExoticComponent<ReceiptLiraWavyProps & RefAttributes<Svg>>;

export default ReceiptLiraWavy;
export { ReceiptLiraWavy };
