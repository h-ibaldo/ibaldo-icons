import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatCheckBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatCheckBroken: ForwardRefExoticComponent<ChatCheckBrokenProps & RefAttributes<Svg>>;

export default ChatCheckBroken;
export { ChatCheckBroken };
