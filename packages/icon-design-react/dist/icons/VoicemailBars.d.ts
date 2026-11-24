import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface VoicemailBarsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const VoicemailBars: ForwardRefExoticComponent<VoicemailBarsProps & RefAttributes<SVGSVGElement>>;

export default VoicemailBars;
export { VoicemailBars };
