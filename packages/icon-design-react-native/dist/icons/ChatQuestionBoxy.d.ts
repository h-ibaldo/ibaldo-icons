import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatQuestionBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatQuestionBoxy: ForwardRefExoticComponent<ChatQuestionBoxyProps & RefAttributes<Svg>>;

export default ChatQuestionBoxy;
export { ChatQuestionBoxy };
