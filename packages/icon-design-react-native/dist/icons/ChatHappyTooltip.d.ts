import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatHappyTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatHappyTooltip: ForwardRefExoticComponent<ChatHappyTooltipProps & RefAttributes<Svg>>;

export default ChatHappyTooltip;
export { ChatHappyTooltip };
