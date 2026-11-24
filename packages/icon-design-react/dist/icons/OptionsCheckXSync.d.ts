import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface OptionsCheckXSyncProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const OptionsCheckXSync: ForwardRefExoticComponent<OptionsCheckXSyncProps & RefAttributes<SVGSVGElement>>;

export default OptionsCheckXSync;
export { OptionsCheckXSync };
