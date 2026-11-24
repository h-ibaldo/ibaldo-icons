import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatEqualsTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatEqualsTooltip: ForwardRefExoticComponent<ChatEqualsTooltipProps & RefAttributes<Svg>>;

export default ChatEqualsTooltip;
export { ChatEqualsTooltip };
