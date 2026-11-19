import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatHashWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatHashWide: ForwardRefExoticComponent<ChatHashWideProps & RefAttributes<Svg>>;

export default ChatHashWide;
export { ChatHashWide };
