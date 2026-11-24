import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LightbulbRaysCapProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LightbulbRaysCap: ForwardRefExoticComponent<LightbulbRaysCapProps & RefAttributes<Svg>>;

export default LightbulbRaysCap;
export { LightbulbRaysCap };
