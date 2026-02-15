import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Tab1ToolSettingsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Tab1ToolSettings: ForwardRefExoticComponent<Tab1ToolSettingsProps & RefAttributes<SVGSVGElement>>;

export default Tab1ToolSettings;
export { Tab1ToolSettings };
