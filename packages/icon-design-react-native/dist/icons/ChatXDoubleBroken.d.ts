import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatXDoubleBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatXDoubleBroken: ForwardRefExoticComponent<ChatXDoubleBrokenProps & RefAttributes<Svg>>;

export default ChatXDoubleBroken;
export { ChatXDoubleBroken };
