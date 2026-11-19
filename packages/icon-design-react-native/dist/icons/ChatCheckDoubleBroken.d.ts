import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatCheckDoubleBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatCheckDoubleBroken: ForwardRefExoticComponent<ChatCheckDoubleBrokenProps & RefAttributes<Svg>>;

export default ChatCheckDoubleBroken;
export { ChatCheckDoubleBroken };
