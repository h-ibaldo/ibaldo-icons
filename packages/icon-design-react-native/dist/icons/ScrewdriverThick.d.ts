import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ScrewdriverThickProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ScrewdriverThick: ForwardRefExoticComponent<ScrewdriverThickProps & RefAttributes<Svg>>;

export default ScrewdriverThick;
export { ScrewdriverThick };
