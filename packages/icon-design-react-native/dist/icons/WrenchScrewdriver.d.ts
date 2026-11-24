import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WrenchScrewdriverProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WrenchScrewdriver: ForwardRefExoticComponent<WrenchScrewdriverProps & RefAttributes<Svg>>;

export default WrenchScrewdriver;
export { WrenchScrewdriver };
