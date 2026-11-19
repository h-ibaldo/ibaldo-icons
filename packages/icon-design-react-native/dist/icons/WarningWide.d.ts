import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WarningWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WarningWide: ForwardRefExoticComponent<WarningWideProps & RefAttributes<Svg>>;

export default WarningWide;
export { WarningWide };
