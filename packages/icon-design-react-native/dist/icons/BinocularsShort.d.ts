import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BinocularsShortProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BinocularsShort: ForwardRefExoticComponent<BinocularsShortProps & RefAttributes<Svg>>;

export default BinocularsShort;
export { BinocularsShort };
