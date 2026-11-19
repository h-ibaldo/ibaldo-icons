import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowLightbulbBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowLightbulbBare: ForwardRefExoticComponent<WindowLightbulbBareProps & RefAttributes<Svg>>;

export default WindowLightbulbBare;
export { WindowLightbulbBare };
