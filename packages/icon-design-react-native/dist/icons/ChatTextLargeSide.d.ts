import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatTextLargeSideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatTextLargeSide: ForwardRefExoticComponent<ChatTextLargeSideProps & RefAttributes<Svg>>;

export default ChatTextLargeSide;
export { ChatTextLargeSide };
