import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrainSettingsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrainSettings: ForwardRefExoticComponent<BrainSettingsProps & RefAttributes<SVGSVGElement>>;

export default BrainSettings;
export { BrainSettings };
