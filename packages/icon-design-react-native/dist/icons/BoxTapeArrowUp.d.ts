import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BoxTapeArrowUpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BoxTapeArrowUp: ForwardRefExoticComponent<BoxTapeArrowUpProps & RefAttributes<Svg>>;

export default BoxTapeArrowUp;
export { BoxTapeArrowUp };
