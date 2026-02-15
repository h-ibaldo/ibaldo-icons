import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ApplicationWindow2SpeechProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ApplicationWindow2Speech: ForwardRefExoticComponent<ApplicationWindow2SpeechProps & RefAttributes<SVGSVGElement>>;

export default ApplicationWindow2Speech;
export { ApplicationWindow2Speech };
