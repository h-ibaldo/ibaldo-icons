import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChatStarCornerWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChatStarCornerWide: ForwardRefExoticComponent<ChatStarCornerWideProps & RefAttributes<Svg>>;

export default ChatStarCornerWide;
export { ChatStarCornerWide };
