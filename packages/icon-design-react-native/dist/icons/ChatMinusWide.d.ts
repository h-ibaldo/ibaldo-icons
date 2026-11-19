import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatMinusWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatMinusWide: ForwardRefExoticComponent<ChatMinusWideProps & RefAttributes<Svg>>;

export default ChatMinusWide;
export { ChatMinusWide };
