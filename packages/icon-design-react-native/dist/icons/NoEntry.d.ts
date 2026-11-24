import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface NoEntryProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const NoEntry: ForwardRefExoticComponent<NoEntryProps & RefAttributes<Svg>>;

export default NoEntry;
export { NoEntry };
