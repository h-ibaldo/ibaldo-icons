import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface InfoScriptProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const InfoScript: ForwardRefExoticComponent<InfoScriptProps & RefAttributes<SVGSVGElement>>;

export default InfoScript;
export { InfoScript };
