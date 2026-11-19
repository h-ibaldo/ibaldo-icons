import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatUnderlineTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatUnderlineTooltip: ForwardRefExoticComponent<ChatUnderlineTooltipProps & RefAttributes<Svg>>;

export default ChatUnderlineTooltip;
export { ChatUnderlineTooltip };
