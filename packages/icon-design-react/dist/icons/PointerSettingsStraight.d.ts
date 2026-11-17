import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PointerSettingsStraightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PointerSettingsStraight: ForwardRefExoticComponent<PointerSettingsStraightProps & RefAttributes<SVGSVGElement>>;

export default PointerSettingsStraight;
export { PointerSettingsStraight };
