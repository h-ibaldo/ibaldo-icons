import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LanguageSpeechBubble2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LanguageSpeechBubble2: ForwardRefExoticComponent<LanguageSpeechBubble2Props & RefAttributes<SVGSVGElement>>;

export default LanguageSpeechBubble2;
export { LanguageSpeechBubble2 };
