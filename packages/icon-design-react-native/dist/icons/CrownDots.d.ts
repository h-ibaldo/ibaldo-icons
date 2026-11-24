import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CrownDotsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CrownDots: ForwardRefExoticComponent<CrownDotsProps & RefAttributes<Svg>>;

export default CrownDots;
export { CrownDots };
