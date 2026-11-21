import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface VoicemailProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Voicemail: ForwardRefExoticComponent<VoicemailProps & RefAttributes<SVGSVGElement>>;

export default Voicemail;
export { Voicemail };
