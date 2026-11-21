import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PhoneChatSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PhoneChatSharp: ForwardRefExoticComponent<PhoneChatSharpProps & RefAttributes<Svg>>;

export default PhoneChatSharp;
export { PhoneChatSharp };
