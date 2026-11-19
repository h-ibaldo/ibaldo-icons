import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StoreBrowserProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StoreBrowser: ForwardRefExoticComponent<StoreBrowserProps & RefAttributes<Svg>>;

export default StoreBrowser;
export { StoreBrowser };
