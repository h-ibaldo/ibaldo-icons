import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TranslateSyncCodeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TranslateSyncCode: ForwardRefExoticComponent<TranslateSyncCodeProps & RefAttributes<Svg>>;

export default TranslateSyncCode;
export { TranslateSyncCode };
