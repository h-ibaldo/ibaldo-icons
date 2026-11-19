import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BrowserGlobeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BrowserGlobe: ForwardRefExoticComponent<BrowserGlobeProps & RefAttributes<Svg>>;

export default BrowserGlobe;
export { BrowserGlobe };
