import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LightbulbScrewProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LightbulbScrew: ForwardRefExoticComponent<LightbulbScrewProps & RefAttributes<Svg>>;

export default LightbulbScrew;
export { LightbulbScrew };
