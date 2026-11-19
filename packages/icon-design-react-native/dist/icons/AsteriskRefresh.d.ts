import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AsteriskRefreshProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AsteriskRefresh: ForwardRefExoticComponent<AsteriskRefreshProps & RefAttributes<Svg>>;

export default AsteriskRefresh;
export { AsteriskRefresh };
