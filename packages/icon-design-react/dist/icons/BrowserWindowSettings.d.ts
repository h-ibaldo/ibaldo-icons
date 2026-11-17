import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrowserWindowSettingsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrowserWindowSettings: ForwardRefExoticComponent<BrowserWindowSettingsProps & RefAttributes<SVGSVGElement>>;

export default BrowserWindowSettings;
export { BrowserWindowSettings };
