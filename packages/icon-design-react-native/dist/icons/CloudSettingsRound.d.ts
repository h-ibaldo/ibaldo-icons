import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudSettingsRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudSettingsRound: ForwardRefExoticComponent<CloudSettingsRoundProps & RefAttributes<Svg>>;

export default CloudSettingsRound;
export { CloudSettingsRound };
