import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GearStackSpikyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GearStackSpiky: ForwardRefExoticComponent<GearStackSpikyProps & RefAttributes<Svg>>;

export default GearStackSpiky;
export { GearStackSpiky };
