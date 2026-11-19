import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LaptopStoreProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LaptopStore: ForwardRefExoticComponent<LaptopStoreProps & RefAttributes<Svg>>;

export default LaptopStore;
export { LaptopStore };
