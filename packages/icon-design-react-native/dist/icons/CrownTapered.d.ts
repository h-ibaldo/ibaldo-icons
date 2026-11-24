import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CrownTaperedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CrownTapered: ForwardRefExoticComponent<CrownTaperedProps & RefAttributes<Svg>>;

export default CrownTapered;
export { CrownTapered };
