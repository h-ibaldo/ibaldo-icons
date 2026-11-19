import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowSearchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowSearch: ForwardRefExoticComponent<WindowSearchProps & RefAttributes<Svg>>;

export default WindowSearch;
export { WindowSearch };
