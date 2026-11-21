import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ReceiptFrancWavyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ReceiptFrancWavy: ForwardRefExoticComponent<ReceiptFrancWavyProps & RefAttributes<Svg>>;

export default ReceiptFrancWavy;
export { ReceiptFrancWavy };
