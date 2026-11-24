import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudSadRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudSadRound: ForwardRefExoticComponent<CloudSadRoundProps & RefAttributes<Svg>>;

export default CloudSadRound;
export { CloudSadRound };
