import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HandRefreshProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HandRefresh: ForwardRefExoticComponent<HandRefreshProps & RefAttributes<Svg>>;

export default HandRefresh;
export { HandRefresh };
