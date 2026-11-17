import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SwitchToggleIntermediateProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SwitchToggleIntermediate: ForwardRefExoticComponent<SwitchToggleIntermediateProps & RefAttributes<SVGSVGElement>>;

export default SwitchToggleIntermediate;
export { SwitchToggleIntermediate };
