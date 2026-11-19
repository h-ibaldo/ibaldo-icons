import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatQuestionTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatQuestionTooltip: ForwardRefExoticComponent<ChatQuestionTooltipProps & RefAttributes<Svg>>;

export default ChatQuestionTooltip;
export { ChatQuestionTooltip };
