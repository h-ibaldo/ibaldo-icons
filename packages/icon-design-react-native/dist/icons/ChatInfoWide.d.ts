import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatInfoWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatInfoWide: ForwardRefExoticComponent<ChatInfoWideProps & RefAttributes<Svg>>;

export default ChatInfoWide;
export { ChatInfoWide };
