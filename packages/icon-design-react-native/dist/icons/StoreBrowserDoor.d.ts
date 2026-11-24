import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StoreBrowserDoorProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StoreBrowserDoor: ForwardRefExoticComponent<StoreBrowserDoorProps & RefAttributes<Svg>>;

export default StoreBrowserDoor;
export { StoreBrowserDoor };
