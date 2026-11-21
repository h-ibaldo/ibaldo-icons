import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ReceiptListRollProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ReceiptListRoll: ForwardRefExoticComponent<ReceiptListRollProps & RefAttributes<Svg>>;

export default ReceiptListRoll;
export { ReceiptListRoll };
