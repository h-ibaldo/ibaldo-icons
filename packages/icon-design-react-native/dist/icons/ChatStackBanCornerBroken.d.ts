import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStackBanCornerBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStackBanCornerBroken: ForwardRefExoticComponent<ChatStackBanCornerBrokenProps & RefAttributes<Svg>>;

export default ChatStackBanCornerBroken;
export { ChatStackBanCornerBroken };
