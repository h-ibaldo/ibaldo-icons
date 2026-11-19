import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LightbulbFilamentProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LightbulbFilament: ForwardRefExoticComponent<LightbulbFilamentProps & RefAttributes<Svg>>;

export default LightbulbFilament;
export { LightbulbFilament };
