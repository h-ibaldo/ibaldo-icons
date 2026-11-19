import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudBanRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudBanRound: ForwardRefExoticComponent<CloudBanRoundProps & RefAttributes<Svg>>;

export default CloudBanRound;
export { CloudBanRound };
