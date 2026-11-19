import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DocumentChecklistPlusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DocumentChecklistPlus: ForwardRefExoticComponent<DocumentChecklistPlusProps & RefAttributes<Svg>>;

export default DocumentChecklistPlus;
export { DocumentChecklistPlus };
