import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudOffRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudOffRound: ForwardRefExoticComponent<CloudOffRoundProps & RefAttributes<Svg>>;

export default CloudOffRound;
export { CloudOffRound };
