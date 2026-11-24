import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudSquareRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudSquareRound: ForwardRefExoticComponent<CloudSquareRoundProps & RefAttributes<Svg>>;

export default CloudSquareRound;
export { CloudSquareRound };
