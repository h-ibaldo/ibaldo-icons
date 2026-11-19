import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TranslateChatProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TranslateChat: ForwardRefExoticComponent<TranslateChatProps & RefAttributes<Svg>>;

export default TranslateChat;
export { TranslateChat };
