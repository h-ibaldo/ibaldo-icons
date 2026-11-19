import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LightbulbCapProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LightbulbCap: ForwardRefExoticComponent<LightbulbCapProps & RefAttributes<Svg>>;

export default LightbulbCap;
export { LightbulbCap };
