import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LightbulbRaysSlimProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LightbulbRaysSlim: ForwardRefExoticComponent<LightbulbRaysSlimProps & RefAttributes<Svg>>;

export default LightbulbRaysSlim;
export { LightbulbRaysSlim };
