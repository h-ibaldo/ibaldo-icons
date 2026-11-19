import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LightbulbFilamentCapProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LightbulbFilamentCap: ForwardRefExoticComponent<LightbulbFilamentCapProps & RefAttributes<Svg>>;

export default LightbulbFilamentCap;
export { LightbulbFilamentCap };
