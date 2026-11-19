import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackUnderlineTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackUnderlineTooltip: ForwardRefExoticComponent<ChatStackUnderlineTooltipProps & RefAttributes<Svg>>;

export default ChatStackUnderlineTooltip;
export { ChatStackUnderlineTooltip };
