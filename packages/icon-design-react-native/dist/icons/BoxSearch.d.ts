import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BoxSearchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BoxSearch: ForwardRefExoticComponent<BoxSearchProps & RefAttributes<Svg>>;

export default BoxSearch;
export { BoxSearch };
