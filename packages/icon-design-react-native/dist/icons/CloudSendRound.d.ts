import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudSendRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudSendRound: ForwardRefExoticComponent<CloudSendRoundProps & RefAttributes<Svg>>;

export default CloudSendRound;
export { CloudSendRound };
