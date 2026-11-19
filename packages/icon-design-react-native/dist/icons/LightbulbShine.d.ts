import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LightbulbShineProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LightbulbShine: ForwardRefExoticComponent<LightbulbShineProps & RefAttributes<Svg>>;

export default LightbulbShine;
export { LightbulbShine };
