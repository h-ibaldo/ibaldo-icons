import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudSquareArrowRightRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudSquareArrowRightRound: ForwardRefExoticComponent<CloudSquareArrowRightRoundProps & RefAttributes<Svg>>;

export default CloudSquareArrowRightRound;
export { CloudSquareArrowRightRound };
