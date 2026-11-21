import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ReceiptPoundWavyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ReceiptPoundWavy: ForwardRefExoticComponent<ReceiptPoundWavyProps & RefAttributes<Svg>>;

export default ReceiptPoundWavy;
export { ReceiptPoundWavy };
