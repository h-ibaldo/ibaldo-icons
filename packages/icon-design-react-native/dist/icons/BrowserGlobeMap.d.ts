import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BrowserGlobeMapProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BrowserGlobeMap: ForwardRefExoticComponent<BrowserGlobeMapProps & RefAttributes<Svg>>;

export default BrowserGlobeMap;
export { BrowserGlobeMap };
