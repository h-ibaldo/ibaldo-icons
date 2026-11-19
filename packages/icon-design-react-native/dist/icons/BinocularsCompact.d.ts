import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BinocularsCompactProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BinocularsCompact: ForwardRefExoticComponent<BinocularsCompactProps & RefAttributes<Svg>>;

export default BinocularsCompact;
export { BinocularsCompact };
