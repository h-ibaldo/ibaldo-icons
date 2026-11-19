import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AtRefreshProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AtRefresh: ForwardRefExoticComponent<AtRefreshProps & RefAttributes<Svg>>;

export default AtRefresh;
export { AtRefresh };
