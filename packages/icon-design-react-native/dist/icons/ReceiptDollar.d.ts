import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ReceiptDollarProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ReceiptDollar: ForwardRefExoticComponent<ReceiptDollarProps & RefAttributes<Svg>>;

export default ReceiptDollar;
export { ReceiptDollar };
