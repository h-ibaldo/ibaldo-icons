import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatQuestionSlantProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatQuestionSlant: ForwardRefExoticComponent<ChatQuestionSlantProps & RefAttributes<Svg>>;

export default ChatQuestionSlant;
export { ChatQuestionSlant };
