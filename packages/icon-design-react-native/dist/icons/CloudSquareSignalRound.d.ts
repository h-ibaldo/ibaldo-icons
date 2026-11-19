import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudSquareSignalRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudSquareSignalRound: ForwardRefExoticComponent<CloudSquareSignalRoundProps & RefAttributes<Svg>>;

export default CloudSquareSignalRound;
export { CloudSquareSignalRound };
