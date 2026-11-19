import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TranslateSyncProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TranslateSync: ForwardRefExoticComponent<TranslateSyncProps & RefAttributes<Svg>>;

export default TranslateSync;
export { TranslateSync };
