import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CopyrightSmallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CopyrightSmall: ForwardRefExoticComponent<CopyrightSmallProps & RefAttributes<Svg>>;

export default CopyrightSmall;
export { CopyrightSmall };
