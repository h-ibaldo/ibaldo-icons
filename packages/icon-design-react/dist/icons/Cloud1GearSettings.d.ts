import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud1GearSettingsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud1GearSettings: ForwardRefExoticComponent<Cloud1GearSettingsProps & RefAttributes<SVGSVGElement>>;

export default Cloud1GearSettings;
export { Cloud1GearSettings };
