import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CopyrightCompactProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CopyrightCompact: ForwardRefExoticComponent<CopyrightCompactProps & RefAttributes<Svg>>;

export default CopyrightCompact;
export { CopyrightCompact };
