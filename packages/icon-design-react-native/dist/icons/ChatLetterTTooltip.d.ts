import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatLetterTTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatLetterTTooltip: ForwardRefExoticComponent<ChatLetterTTooltipProps & RefAttributes<Svg>>;

export default ChatLetterTTooltip;
export { ChatLetterTTooltip };
