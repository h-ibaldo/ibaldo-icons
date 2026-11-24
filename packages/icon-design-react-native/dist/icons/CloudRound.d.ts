import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudRound: ForwardRefExoticComponent<CloudRoundProps & RefAttributes<Svg>>;

export default CloudRound;
export { CloudRound };
