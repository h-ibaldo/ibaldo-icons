import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowLightbulbProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowLightbulb: ForwardRefExoticComponent<WindowLightbulbProps & RefAttributes<Svg>>;

export default WindowLightbulb;
export { WindowLightbulb };
