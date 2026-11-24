import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WrenchScrewdriverDoubleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WrenchScrewdriverDouble: ForwardRefExoticComponent<WrenchScrewdriverDoubleProps & RefAttributes<Svg>>;

export default WrenchScrewdriverDouble;
export { WrenchScrewdriverDouble };
