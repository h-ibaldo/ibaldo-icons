import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PhoneChatRoundSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PhoneChatRoundSharp: ForwardRefExoticComponent<PhoneChatRoundSharpProps & RefAttributes<Svg>>;

export default PhoneChatRoundSharp;
export { PhoneChatRoundSharp };
