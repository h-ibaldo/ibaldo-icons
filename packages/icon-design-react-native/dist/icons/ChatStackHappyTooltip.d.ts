import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackHappyTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackHappyTooltip: ForwardRefExoticComponent<ChatStackHappyTooltipProps & RefAttributes<Svg>>;

export default ChatStackHappyTooltip;
export { ChatStackHappyTooltip };
