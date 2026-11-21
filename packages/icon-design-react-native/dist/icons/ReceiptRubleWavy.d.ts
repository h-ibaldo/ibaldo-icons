import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ReceiptRubleWavyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ReceiptRubleWavy: ForwardRefExoticComponent<ReceiptRubleWavyProps & RefAttributes<Svg>>;

export default ReceiptRubleWavy;
export { ReceiptRubleWavy };
