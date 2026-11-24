import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackMinusCornerFlatProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackMinusCornerFlat: ForwardRefExoticComponent<ChatStackMinusCornerFlatProps & RefAttributes<Svg>>;

export default ChatStackMinusCornerFlat;
export { ChatStackMinusCornerFlat };
