import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatPlusWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatPlusWide: ForwardRefExoticComponent<ChatPlusWideProps & RefAttributes<Svg>>;

export default ChatPlusWide;
export { ChatPlusWide };
