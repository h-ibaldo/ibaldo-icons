import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatQuestionSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatQuestionSharp: ForwardRefExoticComponent<ChatQuestionSharpProps & RefAttributes<Svg>>;

export default ChatQuestionSharp;
export { ChatQuestionSharp };
