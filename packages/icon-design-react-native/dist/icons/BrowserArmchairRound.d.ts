import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BrowserArmchairRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BrowserArmchairRound: ForwardRefExoticComponent<BrowserArmchairRoundProps & RefAttributes<Svg>>;

export default BrowserArmchairRound;
export { BrowserArmchairRound };
