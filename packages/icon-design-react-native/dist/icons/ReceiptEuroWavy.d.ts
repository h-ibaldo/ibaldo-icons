import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ReceiptEuroWavyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ReceiptEuroWavy: ForwardRefExoticComponent<ReceiptEuroWavyProps & RefAttributes<Svg>>;

export default ReceiptEuroWavy;
export { ReceiptEuroWavy };
