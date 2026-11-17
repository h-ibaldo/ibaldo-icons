import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandSettingsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandSettings: ForwardRefExoticComponent<HandSettingsProps & RefAttributes<SVGSVGElement>>;

export default HandSettings;
export { HandSettings };
