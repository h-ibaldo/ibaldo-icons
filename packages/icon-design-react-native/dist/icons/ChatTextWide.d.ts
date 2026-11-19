import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatTextWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatTextWide: ForwardRefExoticComponent<ChatTextWideProps & RefAttributes<Svg>>;

export default ChatTextWide;
export { ChatTextWide };
