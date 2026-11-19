import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MinimizeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Minimize: ForwardRefExoticComponent<MinimizeProps & RefAttributes<Svg>>;

export default Minimize;
export { Minimize };
