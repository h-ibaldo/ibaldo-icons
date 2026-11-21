import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PhoneChatRoundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PhoneChatRound: ForwardRefExoticComponent<PhoneChatRoundProps & RefAttributes<Svg>>;

export default PhoneChatRound;
export { PhoneChatRound };
