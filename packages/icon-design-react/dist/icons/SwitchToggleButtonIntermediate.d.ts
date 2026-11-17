import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SwitchToggleButtonIntermediateProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SwitchToggleButtonIntermediate: ForwardRefExoticComponent<SwitchToggleButtonIntermediateProps & RefAttributes<SVGSVGElement>>;

export default SwitchToggleButtonIntermediate;
export { SwitchToggleButtonIntermediate };
