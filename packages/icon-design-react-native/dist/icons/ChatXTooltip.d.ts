import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatXTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatXTooltip: ForwardRefExoticComponent<ChatXTooltipProps & RefAttributes<Svg>>;

export default ChatXTooltip;
export { ChatXTooltip };
