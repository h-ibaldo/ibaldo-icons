import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LightbulbRaysProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LightbulbRays: ForwardRefExoticComponent<LightbulbRaysProps & RefAttributes<Svg>>;

export default LightbulbRays;
export { LightbulbRays };
