import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SynchSettingsArrowsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SynchSettingsArrows: ForwardRefExoticComponent<SynchSettingsArrowsProps & RefAttributes<SVGSVGElement>>;

export default SynchSettingsArrows;
export { SynchSettingsArrows };
