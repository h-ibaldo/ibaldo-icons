import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudArrowUpRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudArrowUpRound: ForwardRefExoticComponent<CloudArrowUpRoundProps & RefAttributes<Svg>>;

export default CloudArrowUpRound;
export { CloudArrowUpRound };
