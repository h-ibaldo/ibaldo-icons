import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatMinusCornerWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatMinusCornerWide: ForwardRefExoticComponent<ChatMinusCornerWideProps & RefAttributes<Svg>>;

export default ChatMinusCornerWide;
export { ChatMinusCornerWide };
