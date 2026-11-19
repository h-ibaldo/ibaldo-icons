import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatLetterTProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatLetterT: ForwardRefExoticComponent<ChatLetterTProps & RefAttributes<Svg>>;

export default ChatLetterT;
export { ChatLetterT };
