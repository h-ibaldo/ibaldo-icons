import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudLightbulbRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudLightbulbRound: ForwardRefExoticComponent<CloudLightbulbRoundProps & RefAttributes<Svg>>;

export default CloudLightbulbRound;
export { CloudLightbulbRound };
