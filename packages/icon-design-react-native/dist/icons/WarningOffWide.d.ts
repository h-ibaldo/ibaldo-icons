import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WarningOffWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WarningOffWide: ForwardRefExoticComponent<WarningOffWideProps & RefAttributes<Svg>>;

export default WarningOffWide;
export { WarningOffWide };
