import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ScrewdriverProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Screwdriver: ForwardRefExoticComponent<ScrewdriverProps & RefAttributes<Svg>>;

export default Screwdriver;
export { Screwdriver };
