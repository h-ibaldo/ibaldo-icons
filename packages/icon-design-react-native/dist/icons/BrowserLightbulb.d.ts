import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BrowserLightbulbProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BrowserLightbulb: ForwardRefExoticComponent<BrowserLightbulbProps & RefAttributes<Svg>>;

export default BrowserLightbulb;
export { BrowserLightbulb };
