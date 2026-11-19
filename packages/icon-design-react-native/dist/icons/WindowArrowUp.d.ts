import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowArrowUpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowArrowUp: ForwardRefExoticComponent<WindowArrowUpProps & RefAttributes<Svg>>;

export default WindowArrowUp;
export { WindowArrowUp };
