import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PresentationFileProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PresentationFile: ForwardRefExoticComponent<PresentationFileProps & RefAttributes<Svg>>;

export default PresentationFile;
export { PresentationFile };
