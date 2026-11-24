import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatLaughTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatLaughTooltip: ForwardRefExoticComponent<ChatLaughTooltipProps & RefAttributes<Svg>>;

export default ChatLaughTooltip;
export { ChatLaughTooltip };
