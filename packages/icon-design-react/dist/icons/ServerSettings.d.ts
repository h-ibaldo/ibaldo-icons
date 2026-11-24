import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ServerSettingsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ServerSettings: ForwardRefExoticComponent<ServerSettingsProps & RefAttributes<SVGSVGElement>>;

export default ServerSettings;
export { ServerSettings };
