import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatQuestionProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatQuestion: ForwardRefExoticComponent<ChatQuestionProps & RefAttributes<Svg>>;

export default ChatQuestion;
export { ChatQuestion };
