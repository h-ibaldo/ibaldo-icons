import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BrowserRabbitProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BrowserRabbit: ForwardRefExoticComponent<BrowserRabbitProps & RefAttributes<Svg>>;

export default BrowserRabbit;
export { BrowserRabbit };
