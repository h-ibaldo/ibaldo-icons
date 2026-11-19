import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FormLockTooltipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FormLockTooltip: ForwardRefExoticComponent<FormLockTooltipProps & RefAttributes<Svg>>;

export default FormLockTooltip;
export { FormLockTooltip };
