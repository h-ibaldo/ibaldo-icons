import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatXCircleTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatXCircleTooltip: ForwardRefExoticComponent<ChatXCircleTooltipProps & RefAttributes<Svg>>;

export default ChatXCircleTooltip;
export { ChatXCircleTooltip };
