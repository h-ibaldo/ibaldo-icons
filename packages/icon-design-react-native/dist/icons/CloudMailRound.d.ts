import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudMailRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudMailRound: ForwardRefExoticComponent<CloudMailRoundProps & RefAttributes<Svg>>;

export default CloudMailRound;
export { CloudMailRound };
