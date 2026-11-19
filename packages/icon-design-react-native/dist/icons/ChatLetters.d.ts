import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatLettersProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatLetters: ForwardRefExoticComponent<ChatLettersProps & RefAttributes<Svg>>;

export default ChatLetters;
export { ChatLetters };
