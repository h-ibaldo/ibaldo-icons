import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ReceiptListWavyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ReceiptListWavy: ForwardRefExoticComponent<ReceiptListWavyProps & RefAttributes<Svg>>;

export default ReceiptListWavy;
export { ReceiptListWavy };
