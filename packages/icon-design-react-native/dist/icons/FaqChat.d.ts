import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FaqChatProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FaqChat: ForwardRefExoticComponent<FaqChatProps & RefAttributes<Svg>>;

export default FaqChat;
export { FaqChat };
